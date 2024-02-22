import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class JobFilterDropdownDropdownRangeComponent extends Component {
  @service router;
  @tracked value = 0;

  constructor() {
    super(...arguments);
    this.value = this.args.params[this.args.param];
  }

  @action
  autoScroll(dropdown, event) {
    setTimeout(() => {
      const c = document.getElementsByClassName('ember-basic-dropdown-content');
      const e = c[0];
      if (e) {
        const r = e.getBoundingClientRect();
        if (
          r.right > window.innerWidth ||
          r.left < 0 ||
          r.bottom > window.innerHeight ||
          r.top < 0
        ) {
          event.target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500);
  }

  @action
  apply() {
    const queryParams = {
      page: 1,
    };
    queryParams[this.args.param] = this.value;
    this.router.transitionTo({
      queryParams,
    });
  }

  @action
  clear() {
    const queryParams = {
      page: 1,
    };
    queryParams[this.args.param] = undefined;
    this.router.transitionTo({
      queryParams,
    });
  }
}
