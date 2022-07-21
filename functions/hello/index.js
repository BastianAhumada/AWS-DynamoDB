module.exports = (event, _, callback) => {

  if (!event.headers.authorization) {
    callback(null, {
      error: {
        code: "UNATHORIZED",
        message: "Authorization is Required"
      }
    })
  }
  
  if (!event.body) {
    callback(null, {
      error: {
        code: "MISSING PARAMETER",
        message: "Body is Required"
      }
    })
  }

  console.log('Body', event.body)

  const {firstName, lastName, Mascota, nameMascota } = JSON.parse(event.body)
  
  if (event.body) {
    callback(null, {
      error: {
        code: "MISSING PARAMETER",
        message: "Parameters `firstName`, `lastName`, `Mascota`, `nameMascota` is Required"
      }
    })
  }
}