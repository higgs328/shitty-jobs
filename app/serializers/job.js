import JSONAPISerializer from '@ember-data/serializer/json-api';
import { A } from '@ember/array';

export default class JobSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return super.keyForAttribute(key).replaceAll('-', '_');
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const response = {
      data: A(payload)
        .uniqBy('job_id')
        .map((item) => ({
          id: item.job_id,
          type: 'job',
          attributes: item,
        })),
    };
    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      response,
      id,
      requestType,
    );
  }
}
