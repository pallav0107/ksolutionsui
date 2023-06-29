const loginValidation = values => {
    const errors = {}
    const requiredFields = [
      'userName',
      'password',
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
  
    return errors
  }