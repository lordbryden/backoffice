/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username!: String;
  password!: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  onLoginSubmit(){
    const userinfo = {
      username: this.username,
      password: this.password
    }
  //login User by taking a token from the user
  this.authService.authenticateUser(userinfo).subscribe(data => {
   if (data.success){
     console.log(data);
      this.authService.storeUserData(data.token, data.user);
      this.router.navigate(['/tabs']);
      }

      else {
      this.router.navigate(['/login']);
    }

  });

  }

}
