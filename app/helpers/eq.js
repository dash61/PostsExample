import { helper } from '@ember/component/helper';

export function eq(params/*, hash*/) {
  //console.log("helper (eq) - params=", params);
  return params[0] === params[1];
}

export default helper(eq);
