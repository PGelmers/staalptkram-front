import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Login} from '../../model/login';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {
  newUser = new User();
  newAccount = new Login();
  testString = 'The purpose of this string is for testing';

  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  saveNewUser(): void {
    this.loginService.saveNewUser(this.newUser).subscribe(
      (returnedUser: User) => {
        this.newAccount.user = returnedUser;
        this.loginService.saveNewAccount(this.newAccount).subscribe(
          (accountId: number) => {
            if (accountId === 0) {
              this.testString = 'Failure!';
            } else {
              this.testString = 'Success! \n\nAccount with id ' + accountId + ' is saved in the DB. This account has the following properties: \n\n';
            }
          }
        );
      }
    );
  }

}


// SOME LAYOUT IN LOCAL CSS FILE
