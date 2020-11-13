import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {LoginComponent} from './login/login.component';
import {NewUserComponent} from './new-user/new-user.component';
import {PersonalComponent} from './personal/personal.component';

const routes: Routes = [
  {path: '', redirectTo: '/startscreen', pathMatch: 'full'},
  {path: 'startscreen', component: StartScreenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: NewUserComponent},
  {path: 'personal', component: PersonalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

