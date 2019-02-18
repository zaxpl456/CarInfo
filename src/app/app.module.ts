import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CarService} from "./shared/car/car.service";
import { CarListComponent } from './car-list/car-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatDialogModule, MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,
  MatDialog
} from "@angular/material";
import { CarEditComponent } from './car-edit/car-edit.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import {UserService} from "./shared/user/user.service";
import {AuthguardGuard} from "./authguard.guard";
import { RegisterFormComponent } from './register-form/register-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'login-form',
    component: LoginFormComponent,
  },
  {
    path: 'car-list',
    canActivate: [AuthguardGuard],
    component: CarListComponent,
  },
  {
    path: 'car-add',
    canActivate: [AuthguardGuard],
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    canActivate: [AuthguardGuard],
    component: CarEditComponent,

  },
  {
    path: 'register',

    component: RegisterFormComponent
  },
  {path: '**',redirectTo: ''}


];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    LoginFormComponent,
    FooterComponent,
    RegisterFormComponent,
    DialogComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule






  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [CarService,UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
