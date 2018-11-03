import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  logedIn = false;

  constructor() { }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.logedIn);
        }, 800);
      }
    );

    return promise;
  }

  login() {
    console.log('User was logged in!');
    this.logedIn = true;
  }

  logout() {
    console.log('User was logged Out!');
    this.logedIn = false;
  }
}
