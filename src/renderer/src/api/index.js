export async function request(url, options = {}) {
  return await window.api.fetch(url, options);
}
