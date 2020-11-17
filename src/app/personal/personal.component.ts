import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../common/global-constants';
import {User} from '../../model/user';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = GlobalConstants.user;
  }

}
