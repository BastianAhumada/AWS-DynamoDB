import { User } from '../../utils/resources'

export default (event) => {
  const CreateUser =  User.UserCreate({
    Data: {
      firstName: 'Bastian',
      lastName: "Ahumada",
      body: {
        addres: "Villa Los Floristas"
      }
    }
  })

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
