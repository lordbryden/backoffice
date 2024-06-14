import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { tokenNotExpired } from 'angular-jwt';
import { map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

    //public backendurl ='';

    //public backendurl = 'http://localhost:3000/';

    //public backendurl = 'https://www.myeazyschool.com/';

    public backendurl = 'https://still-lake-93407-e74ea85a8e7c.herokuapp.com/';

headers!: HttpHeaders | { [header: string]: string | string[]; };


constructor(    private http: HttpClient,
  ) { }

  useSerial(serialinfo:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.backendurl + 'admins/profile/subscribe', serialinfo, { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  registerSubject(subjectinfo:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.backendurl + 'admins/addsubject', subjectinfo, { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  creditAgent(creditinfo:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.backendurl + 'admins/salesagents/creditaccount', creditinfo, { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  createBook(bookinfo:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.backendurl + 'admins/addbook', bookinfo, { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  createVideo(videoinfo:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.backendurl + 'admins/addvideo', videoinfo, { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

}
