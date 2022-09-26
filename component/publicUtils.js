export function initHeader () {
  let headers = new Headers()
  // headers.append('Accept', 'application/json, text/plain, */*')
  // headers.append('Cache-Control', 'no-store, no-cache')
  headers.append('Content-Type', 'application/json;charset=UTF-8')
  // headers.append("Access-Control-Allow-Origin", "no-cors")
  // headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  // headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
  return headers;
}