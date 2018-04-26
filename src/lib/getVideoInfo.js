
export default (id, token) => {
  return new Promise((resolve, reject) => {

    fetch('https://fluttr-api.herokuapp.com/videos/info/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        resolve(json)
      })
      .catch((error) => {
        reject(error)
      })

  })
}
