import { helper } from '@ember/component/helper';

export default helper(function clean(positional /*, named*/) {
  const text = positional[0];
  return text.replaceAll(',', '').replaceAll('T00:00:00.000', '').toLowerCase();
});
