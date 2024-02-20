import Component from '@glimmer/component';
import { cached, tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JobFilterDropdownComponent extends Component {
  @tracked options = [];
  @tracked selectedOptions = [];

  constructor() {
    super(...arguments);
    if (this.args.results) {
      this.options = this.args.results.map((r) => r[this.args.key]);
    }
  }

  @cached
  get uniqueOptions() {
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    return this.options.filter(unique).sort();
  }

  @cached
  get isEmpty() {
    return Boolean(this.uniqueOptions.length === 0);
  }

  @action
  onChange(option, event) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.pop(option);
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
}
