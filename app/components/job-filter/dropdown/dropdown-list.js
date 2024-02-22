import Component from '@glimmer/component';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { cached } from '@glimmer/tracking';

export default class JobFilterDropdownDropdownListComponent extends Component {
  @cached
  get options() {
    return A(this.args.results.map((r) => r[this.args.key]));
  }

  @cached
  get selectedOptions() {
    const b = Boolean(this.args.params[this.args.param]);
    return b ? A(this.args.params[this.args.param].split(',')) : A();
  }

  @cached
  get optionsUnique() {
    return A(this.options).uniq();
  }

  @cached
  get optionsGrouped() {
    const count = function (arr, value) {
      return arr.reduce(
        (count, current) => (current === value ? count + 1 : count),
        0,
      );
    };
    return this.optionsUnique.map((value) => ({
      value,
      count: count(this.options, value),
    }));
  }

  @cached
  get optionsSorted() {
    return this.optionsGrouped.sort((a, b) => {
      if (isNaN(a.value)) {
        return a.value.localeCompare(b.value);
      }
      return b.value - a.value;
    });
  }

  @action
  onChange(option, event) {
    if (event.target.checked) {
      this.selectedOptions.addObject(option);
    } else {
      this.selectedOptions.removeObject(option);
    }
  }
}
