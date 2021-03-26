// Adapted to es6 from https://www.w3schools.com/js/js_cookies.asp.

export function setCookie(name, value, exdays=1) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}


export function getCookie(name) {
  const namePrefix = name + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(namePrefix) == 0) {
      return c.substring(namePrefix.length, c.length);
    }
  }
  return '';
}
