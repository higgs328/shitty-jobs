import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class JobFilterDropdownDropdownRangeComponent extends Component {
  @service router;
  @tracked value;
  min = 0;
  max = 300000;
  step = 10000;

  constructor() {
    super(...arguments);
    this.value = this.args.params[this.args.param];
  }
}
