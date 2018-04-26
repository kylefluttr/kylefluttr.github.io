
export default (data) => {
  return new Promise((resolve, reject) => {

    const {
      email, password, username, firstName, lastName
    } = data;

    const body = {email,password,username, firstName, lastName}

    fetch('https://fluttr-api.herokuapp.com/users/signup', {
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
