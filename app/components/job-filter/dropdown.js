import Component from '@glimmer/component';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { cached, tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class JobFilterDropdownComponent extends Component {
  @service router;

  @tracked options = A([]);
  @tracked selectedOptions = A([]);

  constructor() {
    super(...arguments);
    if (this.args.results) {
      this.options = A(this.args.results.map((r) => r[this.args.key]));
    }
    if (this.args.params && this.args.params[this.args.param]) {
      this.selectedOptions = A(this.args.params[this.args.param].split(','));
    }
  }

  @cached
  get uniqueOptions() {
    return [...new Set(this.options)]
      .map((value) => ({
        value,
        count: this.countOccurrences(this.options, value),
      }))
      .sort((a, b) => a.value.localeCompare(b.value));
  }

  countOccurrences(arr, value) {
    return arr.reduce(
      (count, current) => (current === value ? count + 1 : count),
      0,
    );
  }

  @action
  onChange(option, event) {
    if (event.target.checked) {
      this.selectedOptions.addObject(option);
    } else {
      this.selectedOptions.removeObject(option);
    }
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
    queryParams[this.args.param] = this.selectedOptions;
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
