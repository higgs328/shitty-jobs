import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class JobsRoute extends Route {
  @service store;

  async model(params) {
    await new Promise((resolve) => later(resolve, 500));
    if (params) {
      let query = { $q: params.q };
      let results = await this.store.query('job', query);
      return this.filter(results, params);
    }
    return this.currentModel || (await this.store.findAll('job'));
  }

  filter(results, params) {
    if (params.agency) {
      results = results.filter((r) => params.agency.includes(r.agency));
    }
    if (params.tclass) {
      results = results.filter((r) =>
        params.tclass.includes(r.titleClassification),
      );
    }
    if (params.title) {
      results = results.filter((r) =>
        params.title.includes(r.civilServiceTitle),
      );
    }
    if (params.salary) {
    }
    return results;
  }

  @action
  queryParamsDidChange(changed, totalPresent, removed) {
    window.scrollTo(0, 0);
    if (
      Object.keys(changed).filter((k) => k !== 'page').length ||
      Object.keys(removed).filter((k) => k !== 'page').length
    ) {
      this.refresh();
    }
  }
}
