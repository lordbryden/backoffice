import { Component, OnInit } from '@angular/core';

// interface happenings {
//   happeningTitle: string,
//   subject : string,
//   happeningPictureUrl : string
// };

@Component({
  selector: 'app-happenings',
  templateUrl: './happenings.page.html',
  styleUrls: ['./happenings.page.scss'],
})
export class HappeningsPage implements OnInit {
  happeningTitle = '';
  subject = '';
  happeningPictureUrl = ''
  constructor() { }

  ngOnInit() {
  console.log('me')
  }

  onCreateHappenings(){

  }

  onPictureFileSelected(event : any){

  }

  onVideoFileSelected(event : any){

  }
}
