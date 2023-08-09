/** @module Login-Script */
/**
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel inputEmailElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai email yang didapatkan pada saat button ditekan.
  * @constant {string}
  */
  const email = inputEmailElement.value;

  /**
  * Membuat variabel password untuk menyimpan nilai password yang didapatkan pada saat button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
