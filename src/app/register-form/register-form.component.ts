import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {CarService} from "../shared/car/car.service";
import {UserService} from "../shared/user/user.service";
import {NgForm} from "@angular/forms";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.userService.save(form).subscribe(result => {
      this.router.navigate(['login-form']);
    }, error => this.openDialog());
  }


  openDialog() {


    let dialogRef = this.dialog.open(DialogComponent, {

      width: '500px',
      data: 'Nie udało się zarejestrować'

    });

  }
}
