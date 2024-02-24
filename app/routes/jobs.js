import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class JobsRoute extends Route {
  @service store;

  async model(params) {
    // Get Jobs
    let records = await this.store.query('job', { $q: params.q });

    // Attach Favorites
    records = await Promise.all(
      records.map(async (record) => {
        record.favorite = await this.store.findRecord('favorite', record.id);
        return record;
      }),
    );

    // Apply Filters
    return this.filter(records, params);
  }

  filter(records, params) {
    if (params.agency) {
      records = records.filter((r) => params.agency.includes(r.agency));
    }
    if (params.tclass) {
      records = records.filter((r) =>
        params.tclass.includes(r.titleClassification),
      );
    }
    if (params.title) {
      records = records.filter((r) =>
        params.title.includes(r.civilServiceTitle),
      );
    }
    if (params.salary) {
      records = records.filter(
        (r) =>
          parseInt(params.salary) >= parseInt(r.salaryRangeFrom) &&
          parseInt(params.salary) <= parseInt(r.salaryRangeTo),
      );
    }
    return records;
  }

  @action
  queryParamsDidChange(changed, totalPresent, removed) {
    window.scrollTo(0, 0);
    if (
      Object.keys(changed).filter((k) => k !== 'page').length ||
      Object.keys(removed).filter((k) => k !== 'page').length
    ) {
      this.refresh();
    }
  }
}
