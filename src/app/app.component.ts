import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../common/global-constants';
import {User} from '../model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'staalptkram-front';
  user = GlobalConstants.user;

  constructor() {
  }
}
