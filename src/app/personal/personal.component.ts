import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {OpenstreetmapComponent} from '../openstreetmap/openstreetmap.component';
import {GlobalConstants} from '../../common/global-constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  user = new User();
  openStreetMap = new OpenstreetmapComponent();

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.user = GlobalConstants.user;
    console.log(this.user);
    if (this.user === undefined) {
      this.router.navigateByUrl('/startscreen');
    } else {
      this.openStreetMap.setCoordinates(this.user.latitude, this.user.longitude);
      this.openStreetMap.initializeMap();
    }
  }
}
