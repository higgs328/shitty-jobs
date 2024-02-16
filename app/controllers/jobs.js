import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JobsController extends Controller {
  queryParams = ['page'];

  @tracked
  page = 1;

  @tracked
  size = 30;

  get pages() {
    return Math.ceil(this.model.length / this.size);
  }

  get jobs() {
    const { page, size } = this;
    return this.model.slice((page - 1) * size, (page - 1) * size + size);
  }

  @action
  changePage(offset) {
    this.page += offset;
  }
}
