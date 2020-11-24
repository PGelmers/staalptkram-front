import {Component, OnInit} from '@angular/core';
import {Login} from '../../model/login';
import {User} from '../../model/user';
import {LoginService} from '../../services/login.service';
import { GlobalConstants } from '../../common/global-constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();
  user = new User();
  message: string;
  hide = true;

  constructor(public loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  tryLogin(): void {
    this.loginService.tryLogin(this.login).subscribe(
      (returnedUser: User) => {
        this.user = returnedUser;
        if (returnedUser.firstName == null) {
          this.message = 'Please check your username and/or password and try again.';
        } else {
          this.message = 'Success! \n\nWelcome back ' + returnedUser.firstName + '\n\n';
          GlobalConstants.user = this.user;
          this.router.navigateByUrl('/personal');
        }
      }
    );
  }
}

// SOME LAYOUT IN LOCAL CSS FILE
