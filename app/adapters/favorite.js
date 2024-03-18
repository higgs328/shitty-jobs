import ApplicationAdapter from './application';
import { Promise } from 'rsvp';
import { NotFoundError } from '@ember-data/adapter/error';

export default class FavoriteAdapter extends ApplicationAdapter {
  findAll() {
    return new Promise(function (resolve) {
      resolve(
        Object.keys(localStorage)
          .map((key) => JSON.parse(localStorage[key]))
          .filter((o) => o.type === 'favorite'),
      );
    });
  }

  findRecord(store, type, id) {
    return new Promise(function (resolve, reject) {
      const data = localStorage.getItem(id);
      if (data) {
        resolve(JSON.parse(data));
      } else {
        reject(new NotFoundError());
      }
    });
  }

  createRecord(store, type, snapshot) {
    const data = this.serialize(snapshot, { includeId: true });
    return new Promise(function (resolve) {
      localStorage.setItem(data.id, JSON.stringify(data));
      resolve(data);
    });
  }

  deleteRecord(store, type, snapshot) {
    const data = this.serialize(snapshot, { includeId: true });
    return new Promise(function (resolve) {
      localStorage.removeItem(data.id);
      resolve(data);
    });
  }
}
