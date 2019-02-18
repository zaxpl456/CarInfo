import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthguardGuard} from "./authguard.guard";
import {UserService} from "./shared/user/user.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CarListComponent} from "./car-list/car-list.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public http: HttpClient,private user:UserService,private router:Router,private dialog: MatDialog) {}

  isLogged(){
    if(this.user.getUserLoggedIn()){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this.router.navigate(['login-form']);
    this.user.logOut();
  }





}
