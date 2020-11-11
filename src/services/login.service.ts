import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Login} from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  saveNewUser(newUser: User) {
    return this.http.post('http://localhost:8080/user', newUser);
  }

  // tslint:disable-next-line:typedef
  saveNewAccount(newAccount: Login) {
    return this.http.post('http://localhost:8080/account', newAccount);
  }
}
