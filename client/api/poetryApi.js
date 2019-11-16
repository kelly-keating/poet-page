import request from 'superagent'

const poetryUrl = "http://poetrydb.org/"

export function searchByCategory(category, search) {
  return request.get(poetryUrl + '/' + category + '/' + search)
    .then(res => {
      const poems = res.body
      return poems
    })
}
