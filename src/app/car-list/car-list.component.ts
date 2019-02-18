import {Component, OnInit} from '@angular/core';
import {CarService} from "../shared/car/car.service";
import {UserService} from "../shared/user/user.service";
import {MatDialog,} from "@angular/material";
import {DialogComponent} from "../dialog/dialog.component";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<any>;
  car : any={};
  sub: Subscription;
  key: string = 'name'; //set default

  reverse: boolean = false;

  sort(key){

    this.key = key;

    this.reverse = !this.reverse;

  }


  p: number = 1;


  constructor(private carService: CarService,private userService:UserService,public dialog: MatDialog,private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.carService.getAll().subscribe(data=>{
      this.cars=data;
    });




  }

  openDialog(href) {


      let dialogRef = this.dialog.open(DialogComponent, {

        width: '500px',
        data: this.results(href)

      });

  }


    results(href){
      this.cars.forEach(value=>{
        if(value.id==href){
          this.car=value;
        }
      })
      console.log(this.car.name);
      return this.car.carSpec;
    }










}
