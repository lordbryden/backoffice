import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { tokenNotExpired } from 'angular-jwt';
import { map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsServicesService {

    //public backendurl ='';

    public backendurl = 'http://localhost:3000/';

    //public backendurl = 'https://www.myeazyschool.com/';

    //public backendurl = 'https://stormy-mountain-88949.herokuapp.com/';

headers!: HttpHeaders | { [header: string]: string | string[]; };


constructor(    private http: HttpClient,
  ) { }

  getStudents() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.backendurl + 'users/fetchstudents', { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  getSubjects() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.backendurl + 'users/subject/fetch-all', { headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    )
  }


}
