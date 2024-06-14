import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';   //we import the validate service here to be able to use it properly
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sales-agent',
  templateUrl: './create-sales-agent.page.html',
  styleUrls: ['./create-sales-agent.page.scss'],
})
export class CreateSalesAgentPage implements OnInit {
  name!: String;
  username!: String;
  email!: String;
  phonenumber!: Number;
  password!: String;
  passwordconfirm!: String;
  role: String = 'SALES-AGENT';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('not empty')
  }

  onRegisterSubmit() {
    const userinfo = {
      "name": this.name,
      "username": this.username,
      "email": this.email,
      "phonenumber": this.phonenumber,
      "password": this.password,
      "passwordconfirm": this.passwordconfirm,
      "role": this.role
    }
    //Register User
    this.authService.registerSalesAgent(userinfo).subscribe(data => {
      if (data.success) {
        this.router.navigate(['manage-sales-agent']);
      } else {
        this.router.navigate(['create-sales-agent']);
      }
    });

  }

}
