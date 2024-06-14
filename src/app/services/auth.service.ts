import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { tokenNotExpired } from 'angular-jwt';
import { map, switchMap} from 'rxjs/operators';
import { BehaviorSubject, Observable, from, of, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  authToken: any;
  userdata: any;
  user: any
  language!: string;

    //public backendurl ='';

    //public backendurl = 'http://localhost:3000/';

    //public backendurl = 'https://www.myeazyschool.com/';

    public backendurl = 'https://still-lake-93407-e74ea85a8e7c.herokuapp.com/';

  headers!: HttpHeaders | { [header: string]: string | string[]; };

  constructor(    private http: HttpClient,
   ) { }

  registerUser(user:any) {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': 'https://still-lake-93407-e74ea85a8e7c.herokuapp.com',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'X-Requested-With',
    });
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.backendurl + 'admins/register', user, { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  registerSalesAgent(user:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.backendurl + 'admins/register/sales-agent', user, { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  registerStudent(user:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.backendurl + 'admins/register/student', user, { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  authenticateUser(user:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.backendurl + 'admins/authenticate/admin', user, { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  getProfile() {
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.backendurl + 'admins/profile', { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  storeUserData(token:any, user:any) {
    localStorage.setItem('id_token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = window.localStorage.getItem('id_token');
    this.userdata = window.localStorage.getItem('user');
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    if(localStorage.getItem('id_token') != null){
          return true;
    }else {return false;}

  }

  tokenvalue(): any {
    //let temp = JSON.parse(window.localStorage.getItem('id_token'));
   // return temp;
  }

  logoutserverstatus(userinfo:any) {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': 'https://still-lake-93407-e74ea85a8e7c.herokuapp.com',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'X-Requested-With',
    });
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.backendurl + 'admins/logout', userinfo, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      )
  }

  alldevicelogoutserverstatus(userinfo:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.backendurl + 'admins/alldevicelogout', userinfo, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      )
  }

  logout() {
    this.authToken = null;
    this.user = null;
    //this.language = JSON.parse(window.localStorage.getItem('language'));
    localStorage.clear();
    localStorage.setItem('language', JSON.stringify(this.language));
  }

}
