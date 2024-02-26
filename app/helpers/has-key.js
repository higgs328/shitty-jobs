import { helper } from '@ember/component/helper';

export default helper(function hasKey(positional /*, named*/) {
  const a = positional[0];
  const b = positional[1];
  return Boolean(a && b ? a[b] : false);
});
