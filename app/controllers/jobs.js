import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class JobsController extends Controller {
  queryParams = ['q', 'page', 'order', 'agency', 'title', 'tclass', 'salary'];

  @tracked
  page = 1;

  @tracked
  order = 'posting_date desc';

  @tracked
  salary = 0;

  @tracked
  size = 20;

  get params() {
    const { q, page, agency, title, tclass, salary } = this;
    return {
      q,
      page,
      agency,
      title,
      tclass,
      salary,
    };
  }

  get pages() {
    return Math.ceil(this.model.length / this.size);
  }

  get min() {
    const { page, size } = this;
    return (page - 1) * size;
  }

  get max() {
    const { min, size, model } = this;
    return min + size > model.length ? model.length : min + size;
  }

  get jobs() {
    const { min, max, model } = this;
    return model.slice(min, max);
  }

  get label() {
    const { min, max, model } = this;
    return model.length ? `${min + 1}-${max} of ${model.length}` : 0;
  }

  get maxProcessDate() {
    const dates = this.model.map((j) => j.processDate);
    return dates.reduce((max, date) => (date > max ? date : max));
  }
}
