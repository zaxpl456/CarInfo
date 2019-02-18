import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../shared/user/user.service";
import {Subscription} from "rxjs/Subscription";
import {NgForm} from "@angular/forms";
import {list} from "postcss";
import {forEach} from "@angular/router/src/utils/collection";
import {MatDialog} from "@angular/material";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  use:any={};
  sub: Subscription;
  constructor(private route: ActivatedRoute,private router: Router,private user:UserService,public dialog: MatDialog) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.user.get(id).subscribe((use: any) => {
          if (use) {
            this.use = use;
            this.use.href = use._links.self.href;
          } else {

          }
        });
      }
    });
  }

 loginUser(e) {
   e.preventDefault();
   var username = e.target.elements[0].value;
   var password = e.target.elements[1].value;

   console.log(username)
   this.user.getAll().forEach(value => {
     for (var i = 0; i < value.length; i++) {
       if (username == value[i].name && password == value[i].password) {
         this.user.setUserLoggedIn();
         this.router.navigate(['car-list']);
       }
     }
     if(!this.user.getUserLoggedIn()){
        this.openDialog()
     }
   });
   return false;
 }

    logOut(){
      this.user.logOut();
     this.router.navigate(['login']);

   }

  openDialog(){


    let dialogRef = this.dialog.open(DialogComponent, {

      width: '500px',
      data: 'Nie udało się zalogować'

    });

  }








  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
