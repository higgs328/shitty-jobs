import Model, { attr } from '@ember-data/model';

export default class FavoriteModel extends Model {
  @attr isFavorite;
}
