import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class JobSearchComponent extends Component {
  @service router;

  @tracked
  keywords = '';

  @action
  search(event) {
    event.preventDefault();
    this.router.transitionTo('jobs', {
      queryParams: {
        q: this.keywords,
        page: 1,
      },
    });
    this.keywords = '';
  }
}
