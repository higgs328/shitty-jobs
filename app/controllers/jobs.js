import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JobsController extends Controller {
  queryParams = ['page'];

  @tracked
  page = 1;

  @tracked
  ipp = 30;

  get pages() {
    return Math.ceil(this.model.length / this.ipp);
  }

  get jobs() {
    const { page, ipp } = this;
    return this.model.slice((page - 1) * ipp, (page - 1) * ipp + ipp);
  }

  @action
  changePage(offset) {
    this.page += offset;
  }
}
