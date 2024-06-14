import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.page.html',
  styleUrls: ['./manage-students.page.scss'],
})
export class ManageStudentsPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    console.log('manage-students')
  }

  createStudent(){
    this.router.navigate(['/create-student'], {relativeTo:this.route})
  }

  modifyStudent(){
    this.router.navigate(['/modify-student'], {relativeTo:this.route})
  }

}
