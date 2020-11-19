import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../common/global-constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = GlobalConstants.user;

  constructor() { }

  ngOnInit(): void {
  }

}
