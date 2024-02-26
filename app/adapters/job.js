import ApplicationAdapter from './application';

export default class JobAdapter extends ApplicationAdapter {
  // Build URL to map to Socrata jobs endpoint
  buildURL() {
    return 'https://data.cityofnewyork.us/resource/kpav-sd4t.json?$limit=10000';
  }
}
