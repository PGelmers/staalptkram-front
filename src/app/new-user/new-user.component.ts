import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Login} from '../../model/login';
import {LoginService} from '../../services/login.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {
  newUser = new User();
  newAccount = new Login();
  message: string;
  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  accountInfoFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  saveNewUser(): void {
    if (this.emailFormControl.hasError('required') || this.emailFormControl.hasError('email')) {
      this.message = 'Please look at the email form field. There is something wrong with your input!';
    } else if (this.accountInfoFormControl.hasError('required')) {
      this.message = 'You missed some required input!';
    } else {
      this.loginService.saveNewUser(this.newUser).subscribe(
        (returnedUser: User) => {
          this.newAccount.user = returnedUser;
          this.loginService.saveNewAccount(this.newAccount).subscribe(
            (accountId: number) => {
              if (accountId === 0) {
                this.message = 'There was a problem with your registration.';
              } else {
                // tslint:disable-next-line:max-line-length
                this.message = 'Welcome, ' + this.newAccount.user.firstName + '! \n\nYou have registered correctly.';
              }
            }
          );
        }
      );
    }
  }

}

// SOME LAYOUT IN LOCAL CSS FILE
