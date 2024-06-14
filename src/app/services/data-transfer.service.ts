/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  public data = [];
  public agent!: any;

  constructor(private router: Router) { }


  setAdminInfo(){
    this.agent = window.localStorage.getItem('user');
    this.agent = JSON.parse(this.agent);
  }

  getAdminInfo() {
    let temp: any = window.localStorage.getItem('user');
    temp = JSON.parse(temp);
    return temp;
  }

  // to set filtered videos
  setData(data: any){
    this.data = data;
  }

  getData() {
    let temp = this.data;
    //this.clearData();
    return temp;
  }

  clearData(){
    this.data = [];
  }




}
