import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "./shared/user/user.service";

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private user: UserService,public router:Router){}
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.user.getUserLoggedIn()){
        this.router.navigate(['login']);
        return false;
      }
      else{
        return true;
      }
  }



}
