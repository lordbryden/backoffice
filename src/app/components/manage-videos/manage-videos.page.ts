import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-manage-videos',
  templateUrl: './manage-videos.page.html',
  styleUrls: ['./manage-videos.page.scss'],
})
export class ManageVideosPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    console.log('manage-videos');
  }


  createVideo(){
    this.router.navigate(['/create-videos'], {relativeTo:this.route})
  }

  modifyVideo(){
    this.router.navigate(['/modify-videos'], {relativeTo:this.route})
  }
}
