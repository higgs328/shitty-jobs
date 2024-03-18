import { helper } from '@ember/component/helper';

export default helper(function left(positional /*, named*/) {
  const t = positional[0];
  const l = positional[1];
  return t ? t.substring(0, l) : '';
});
