import ApplicationAdapter from './application';

export default class FavoriteAdapter extends ApplicationAdapter {
  findRecord(store, type, id) {
    // If the record is already in the store, return it.
    const storeRecord = store.peekRecord(type.modelName, id);
    if (storeRecord) {
      return Promise.resolve(storeRecord);
    }
    // If the record is not in the store, get it from localStorage.
    const localRecord = localStorage.getItem(`${type.modelName}-${id}`);
    if (localRecord) {
      return Promise.resolve(JSON.parse(localRecord));
    }
    // If the record is not in the store, set it in localStorage.
    const newRecord = { id: id, isFavorited: false };
    localStorage.setItem(`${type.modelName}-${id}`, JSON.stringify(newRecord));
    return Promise.resolve(JSON.parse(newRecord));
  }

  updateRecord(store, type, snapshot) {
    const { modelName, id } = snapshot;
    const data = this.serialize(snapshot);
    localStorage.setItem(`${modelName}-${id}`, JSON.stringify(data));
  }
}
