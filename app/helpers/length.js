import { helper } from '@ember/component/helper';

export default helper(function length(positional /*, named*/) {
  return positional[0].length;
});
