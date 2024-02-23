import { helper } from '@ember/component/helper';

export default helper(function currency(positional /*, named*/) {
  const d = positional[0];
  const p = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  };
  return d ? new Intl.NumberFormat('en-US', p).format(d) : '$0';
});
