import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class JobFilterKeywordComponent extends Component {
  @service router;

  @action clear() {
    const queryParams = {
      q: undefined,
      page: 1,
    };
    this.router.transitionTo({
      queryParams,
    });
    this.router.refresh();
  }
}
