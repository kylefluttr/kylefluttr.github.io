
export default (email, password) => {
  return new Promise((resolve, reject) => {

    var body = {
      email, password
    };

    fetch('https://fluttr-api.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
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
