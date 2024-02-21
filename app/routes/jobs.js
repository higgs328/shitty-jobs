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
    }
    if (params.tclass) {
    }
    if (params.title) {
    }
    if (params.salary) {
    }
    return results;
  }

  @action
  queryParamsDidChange(changed) {
    window.scrollTo(0, 0);
    if (Object.keys(changed).length === 1 && changed.page) {
      return true;
    } else {
      this.refresh();
    }
  }
}
