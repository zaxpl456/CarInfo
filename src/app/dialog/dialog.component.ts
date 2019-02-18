import {Component, EventEmitter, Inject, OnInit, Optional} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {CarService} from "../shared/car/car.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {CarListComponent} from "../car-list/car-list.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {




  constructor(public thisDialogRef: MatDialogRef<CarListComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: string) {
  }
  ngOnInit() {

  }


  onCloseConfirm() {
    this.thisDialogRef.close(false);
  }

}
