import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Login} from '../../model/login';
import {LoginService} from '../../services/login.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {RegisterPopUpComponent} from '../register-pop-up/register-pop-up.component';

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

  personalInfoFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(public loginService: LoginService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.newUser.longitude = 0;
    this.newUser.latitude = 0;
    this.initMap();
  }

  saveNewUser(): void {
    if (this.emailFormControl.hasError('required') || this.emailFormControl.hasError('email')) {
      this.message = 'Please look at the email form field. There is something wrong with your input!';
    } else if (this.accountInfoFormControl.hasError('required')) {
      this.message = 'You missed some required input!';
    } else if (this.newUser.latitude === 0 || this.newUser.longitude === 0) {
      this.message = 'Don\'t forget to click on your location on the map.';
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
                this.openDialog();

              }
            }
          );
        }
      );
    }
  }


//   export class DialogContentExample {
//   constructor(public dialog: MatDialog) {}
//
  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogRef = this.dialog.open(RegisterPopUpComponent);
    setTimeout(() => {
      dialogRef.close();
      this.router.navigateByUrl('/login');
    }, 3000);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  // tslint:disable-next-line:typedef
  initMap() {
    const myLatLng = {lat: 52.242, lng: 5.6905};

    // @ts-ignore
    // tslint:disable-next-line:no-non-null-assertion
    const map = new google.maps.Map(document.getElementById('map')!, {
      zoom: 7,
      center: myLatLng,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
    });

    // Create the initial InfoWindow.
    // @ts-ignore
    let infoWindow = new google.maps.InfoWindow({
      content: 'Click on the map where you live!',
      position: myLatLng,
    });
    infoWindow.open(map);

    // Configure the click listener.
    map.addListener('click', (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();

      // Create a new InfoWindow.
      // @ts-ignore
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        'This is where I live!'
        // JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infoWindow.open(map);
      this.newUser.latitude = mapsMouseEvent.latLng.lat.apply();
      this.newUser.longitude = mapsMouseEvent.latLng.lng.apply();
    });
  }

}

// SOME LAYOUT IN LOCAL CSS FILE
