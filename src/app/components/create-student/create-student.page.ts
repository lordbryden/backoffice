import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';   //we import the validate service here to be able to use it properly
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.page.html',
  styleUrls: ['./create-student.page.scss'],
})
export class CreateStudentPage implements OnInit {

  name!: String;
  username!: String;
  email!: String;
  phonenumber!: Number;
  password!: String;
  passwordconfirm!: String;
  studyanglo!: Boolean;
  studyfranco!: Boolean;
  studyentrance!: Boolean;
  studydiploma!: Boolean;
  role: String = 'STUDENT';

  constructor(private validateservice: ValidateService,
              private authService: AuthService,
              private router: Router
            ) { }

  ngOnInit() {
    console.log('create-student-page')
  }

  onRegisterSubmit() {
   const userinfo = {
    "name": this.name,
    "username": this.username,
    "email": this.email,
    "phonenumber": this.phonenumber,
    "password": this.password,
    "passwordconfirm": this.passwordconfirm,
    "studyanglo": this.studyanglo,
    "studyfranco": this.studyfranco,
    "studyentrance": this.studyentrance,
    "studydiploma": this.studydiploma,
    "role": this.role
   }


        //Register User
        this.authService.registerStudent(userinfo).subscribe(data => {
          console.log('it works here well');
          if(data.success){
            this.router.navigate(['/manage-students']);
          } else{
            this.router.navigate(['/create-student']);
          }
      });
   }

}
