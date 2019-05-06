import { helper } from '@ember/component/helper';

export function isObject(params/*, hash*/) {
  return typeof(params[0]) === "object";
}

export default helper(isObject);
