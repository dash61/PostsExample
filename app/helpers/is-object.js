import { helper } from '@ember/component/helper';

export function isObject(params/*, hash*/) {
  // console.log("helper (eq) - params=", params,
  //   ", typeof p[0]=", typeof(params[0]));
  return typeof(params[0]) === "object";
}

export default helper(isObject);
