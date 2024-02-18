import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class JobsRoute extends Route {
  @service store;

  queryParams = {
    q: {
      refreshModel: true,
    },
    salary: {
      refreshModel: true,
    },
  };

  async model(params) {
    await new Promise((resolve) => later(resolve, 500));
    if (params) {
      let query = { $q: params.q };
      let results = await this.store.query('job', query);
      return this.filter(results, params);
    }
    return this.currentModel || (await this.store.findAll('job'));
  }

  @action
  queryParamsDidChange(/* params */) {
    window.scrollTo(0, 0);
  }

  filter(results, params) {
    if (params.salary) {
      results = results.filter((r) => r.salaryRangeFrom > 100000);
    }
    return results;
  }
}
