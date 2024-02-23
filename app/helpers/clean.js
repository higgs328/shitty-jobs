import { helper } from '@ember/component/helper';

export default helper(function clean(positional /*, named*/) {
  const text = positional[0];
  return text ? text.replaceAll(/[^a-zA-Z0-9\s,.]/g, '') : '';
});
