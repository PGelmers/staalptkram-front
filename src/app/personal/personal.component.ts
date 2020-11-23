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
  // openStreetMap = new OpenstreetmapComponent();

  constructor() {
  }

  ngOnInit(): void {
    // this.openStreetMap.setCoordinates(53.20589, 6.57904);
    // this.openStreetMap.initializeMap();
    this.user = GlobalConstants.user;
    console.log(this.user);
  }
}
