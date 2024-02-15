import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JobCardComponent extends Component {
  @tracked isFlipped = false;

  @action
  flip() {
    this.isFlipped = !this.isFlipped;
  }
}
