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
    agency: {
      refreshModel: true,
    },
    class: {
      refreshModel: true,
    },
    title: {
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

  filter(results, params) {
    if (params.agency) {
      console.log(params.agency);
    }
    if (params.class) {
      console.log(params.class);
    }
    if (params.title) {
      console.log(params.title);
    }
    if (params.salary) {
      console.log(params.salary);
    }
    return results;
  }

  @action
  queryParamsDidChange(/* params */) {
    window.scrollTo(0, 0);
  }
}
