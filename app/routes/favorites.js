import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FavoritesRoute extends Route {
  @service store;

  async model() {
    // Get Jobs
    let records = await this.store.findAll('job');

    // Attach Favorites
    records = await Promise.all(
      records.map(async (record) => {
        record.favorite = await this.store.findRecord('favorite', record.id);
        return record;
      }),
    );

    // Apply Filters
    return this.filter(records);
  }

  filter(records) {
    records = records.filter((r) => r.favorite.isFavorited);
    return records;
  }
}
