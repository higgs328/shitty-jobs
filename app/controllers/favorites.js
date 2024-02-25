import Controller from '@ember/controller';

export default class FavoritesController extends Controller {
  get jobs() {
    return this.model;
  }
}
