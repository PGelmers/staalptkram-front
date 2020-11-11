import {Component, OnInit} from '@angular/core';
import {Login} from '../../model/login';
import {User} from '../../model/user';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();
  user = new User();
  testString_2 = 'The purpose of this string is for testing';

  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  tryLogin(): void {
    this.loginService.tryLogin(this.login).subscribe(
      (returnedUser: User) => {
        this.user = returnedUser;
        if (returnedUser.firstName == null) {
          this.testString_2 = 'Failed to login!';
        } else {
          this.testString_2 = 'Success! \n\nUser with id ' + returnedUser.id + ' has logged in. This account has the following properties: \n\n' + returnedUser.toString();
        }
      }
    );
  }
}

// SOME LAYOUT IN LOCAL CSS FILE
