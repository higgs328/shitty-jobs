import { helper } from '@ember/component/helper';

export default helper(function consoleLog(positional /*, named*/) {
  console.log(positional[0]);
  return '';
});
