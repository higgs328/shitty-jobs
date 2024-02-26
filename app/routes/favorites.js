import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import { service } from '@ember/service';

export default class FavoritesRoute extends Route {
  @service store;

  async model() {
    await new Promise((resolve) => later(resolve, 250));

    // Get Jobs
    let records = await this.store.findAll('job');
    let favorites = await this.store.findAll('favorite');

    // Attach Favorites
    favorites.forEach((fav) => {
      const job = this.store.peekRecord('job', fav.id);
      job.isFavorite = fav.isFavorite;
    });

    // Apply Filters
    return this.filter(records);
  }

  filter(records) {
    records = records.filter((r) => r.isFavorite);
    return records;
  }
}
