import { helper } from '@ember/component/helper';

export default helper(function range(positional /*, named*/) {
  const count = positional[0];
  return Array.from(Array(count).keys());
});
