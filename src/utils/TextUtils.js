export function validateMobileNumber(mobileNumber) {
  if (mobileNumber.length !== 10) {
    return false;
  } else return true;
}

export function isNotEmpty(string) {
  if (string !== '') {
    return true;
  } else return false;
}

export function validateEmail(email) {
  let pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (pattern.test(String(email).toLowerCase())) {
    return true;
  } else return false;
}
