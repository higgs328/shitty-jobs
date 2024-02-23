import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class JobFilterDropdownDropdownContentComponent extends Component {
  @tracked filter;

  @action
  setFilter(event) {
    this.filter = event.target.value;
  }
}
