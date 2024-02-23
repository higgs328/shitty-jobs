import { helper } from '@ember/component/helper';

export default helper(function search(positional /*, named*/) {
  const a = positional[0];
  const b = positional[1];
  return Boolean((!a || !b ) ? true : a.toUpperCase().search(b.toUpperCase()) > -1);
});
