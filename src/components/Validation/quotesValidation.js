const quotesValidation = (values) => {
  const errors = {};
  const requiredFields = [
    "firstName",
    "lasttName",
    "company",
    "businessEmail",
    "telephoneNumber",
    "message",
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.businessEmail && !validateEmail(values.businessEmail)) {
    errors.businessEmail = "Not a valid email address";
  }
  if (
    values.telephoneNumber &&
    !validateTelephoneNumber(values.telephoneNumber)
  ) {
    errors.telephoneNumber = "Not a valid number";
  }

  return errors;
};
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validateTelephoneNumber(str) {
  // eslint-disable-next-line no-useless-escape
  return /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
    str
  );
}

export default quotesValidation;
