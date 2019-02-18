import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
  public API = '//localhost:8080';
  public USER_API = this.API + '/uzytkowniks';
  private isLogged;

  constructor(private http: HttpClient) {
    this.isLogged=false;
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/show-users');
  }

  get(id: string) {
    return this.http.get(this.USER_API + '/' + id);
  }


  save(user: any): Observable<any> {
    let result: Observable<Object>;
    if (user['href']) {
      result = this.http.put(user.href, user);
    } else {
      result = this.http.post(this.USER_API, user);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

  setUserLoggedIn(){
    this.isLogged=true;
  }

  logOut(){
    this.isLogged=false;
  }

  getUserLoggedIn(){
     return this.isLogged;
  }


}
