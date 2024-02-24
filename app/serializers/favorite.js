import JSONSerializer from '@ember-data/serializer/json';

export default class FavoriteSerializer extends JSONSerializer {
  serialize(snapshot, options) {
    const json = super.serialize(snapshot, options);
    json['id'] = snapshot.id;
    return json;
  }
}
