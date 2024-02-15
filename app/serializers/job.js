import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class JobSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return super.keyForAttribute(key).replaceAll('-', '_');
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const response = {
      data: payload.map((item) => ({
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
