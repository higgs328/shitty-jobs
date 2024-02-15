import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class JobsRoute extends Route {
  @service store;

  model() {
    return new Promise((resolve) => {
      // This is dumb, but simulating a delay to show skeleton screen
      setTimeout(async () => {
        const jobs = await this.store.findAll('job');
        resolve(jobs);
      }, 1000);
    });
  }
}
