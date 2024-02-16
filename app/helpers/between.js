import { helper } from '@ember/component/helper';

export default helper(function between(positional /*, named*/) {
  const val = positional[0];
  const min = positional[1];
  const max = positional[2];
  return Boolean(val >= min && val <= max);
});
