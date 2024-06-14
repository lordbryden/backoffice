import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-tv',
  templateUrl: './live-tv.page.html',
  styleUrls: ['./live-tv.page.scss'],
})
export class LiveTvPage implements OnInit {

    topic= '';
    title= '';
    subject= '';
    class= '';
    subsection= '';

  constructor() { }

  ngOnInit() {

    console.log('me')
  }


   onCreateTV(){

  }


}
