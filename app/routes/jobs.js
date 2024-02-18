import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class JobsRoute extends Route {
  @service store;

  async model() {
    await new Promise((resolve) => later(resolve, 500));
    return this.currentModel || (await this.store.findAll('job'));
  }

  @action
  queryParamsDidChange(/* params */) {
    window.scrollTo(0, 0);
  }
}
