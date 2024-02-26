import { helper } from '@ember/component/helper';

export default helper(function add(positional /*, named*/) {
  const n1 = positional[0];
  const n2 = positional[1];
  return n1 + n2;
});
