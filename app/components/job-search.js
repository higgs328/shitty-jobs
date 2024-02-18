import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class JobSearchComponent extends Component {
  @service router;

  @tracked
  keywords = '';

  @action
  input(event) {
    this.keywords = event.target.value;
  }

  @action
  search(event) {
    event.preventDefault();
    this.router.transitionTo({
      queryParams: {
        $q: this.keywords,
        page: 1,
      },
    });
    this.router.refresh();
  }
}
