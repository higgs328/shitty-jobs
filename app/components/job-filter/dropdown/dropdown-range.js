import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class JobFilterDropdownDropdownRangeComponent extends Component {
  @service router;
  @tracked value;

  constructor() {
    super(...arguments);
    const p = this.args.params[this.args.param];
    this.value = p ? p : 0;
  }
}
