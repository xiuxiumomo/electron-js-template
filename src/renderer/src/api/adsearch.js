import { request } from "./index";

export function getCompanyCondition() {
  return request("/adsearch/index");
}

// export function updateUser(data) {
//   return request('/user/update', {
//     method: 'post',
//     data
//   })
// }
