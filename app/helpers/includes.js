import { helper } from '@ember/component/helper';

export default helper(function includes(positional /*, named*/) {
  return Boolean(positional[0].includes(positional[1]));
});
