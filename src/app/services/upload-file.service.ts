import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
//import { tokenNotExpired } from 'angular-jwt';
import { map, switchMap} from 'rxjs/operators';
import { BehaviorSubject, Observable, from, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
    //public backendurl ='';

    public backendurl = 'http://localhost:3000/';

    //public backendurl = 'https://www.myeazyschool.com/';

    //public backendurl = 'https://stormy-mountain-88949.herokuapp.com/';

  headers!: HttpHeaders | { [header: string]: string | string[]; };

  constructor(    private http: HttpClient,
   ) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.backendurl + 'users/uploadFile', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.backendurl + 'users/uploadfile');
  }

}
