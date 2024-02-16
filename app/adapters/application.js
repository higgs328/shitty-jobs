import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // Build URL to map to Socrata jobs endpoint
  buildURL(modelName, id, snapshot, requestType) {
    if (modelName === 'job' && requestType === 'findAll') {
      return 'https://data.cityofnewyork.us/resource/kpav-sd4t.json?$limit=200';
    }
  }
}
