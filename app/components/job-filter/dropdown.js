import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class JobFilterDropdownComponent extends Component {
  @service router;

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
  apply(value) {
    const queryParams = {
      page: 1,
    };
    queryParams[this.args.param] = value;
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
