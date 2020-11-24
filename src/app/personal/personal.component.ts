import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {OpenstreetmapComponent} from '../openstreetmap/openstreetmap.component';
import {GlobalConstants} from '../../common/global-constants';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  user = new User();
  openStreetMap = new OpenstreetmapComponent();

  constructor() {
  }

  ngOnInit(): void {
    this.user = GlobalConstants.user;
    this.openStreetMap.setCoordinates(this.user.latitude, this.user.longitude);
    this.openStreetMap.initializeMap();
    console.log(this.user);
  }
}
