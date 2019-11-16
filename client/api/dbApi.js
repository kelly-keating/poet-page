import request from 'superagent'

export function getPoems() {
  return request.get('/v1/poems')
    .then(res => {
      const poems = res.body
      return poems
    })
    .catch(() => {
      throw Error('You need to implement an API route for /v1/poems')
    })
}

export function getPoemById(id) {
  return request.get('/v1/poems/' + id)
    .then(res => {
      const poem = res.body
      return poem
    })
    .catch(() => {
      throw Error('You need to implement an API route for /v1/poems')
    })
}

export function addPoem(poem) {
  // convert the large lines string into an array for later processing
  poem.lines = poem.lines.split('\n')
  return request.post('/v1/poems')
    .send(poem)
    .then(res => {
      const returnedPoem = res.body
      return returnedPoem
    })
}

export function deletePoem(id) {
  return request.del('/v1/poems/' + id)
    .then(res => {
      const returnedPoem = res.body
      return returnedPoem
    })
}
