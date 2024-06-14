import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.page.html',
  styleUrls: ['./manage-subjects.page.scss'],
})
export class ManageSubjectsPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    console.log('manage-subjects')
  }

  createSubject(){
    this.router.navigate(['/create-subject'], {relativeTo:this.route})
  }

  modifySubject(){
    this.router.navigate(['/modify-subjects'], {relativeTo:this.route})
  }

}
