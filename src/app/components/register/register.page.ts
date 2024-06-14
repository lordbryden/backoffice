import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name!: String;
  username!: String;
  password!: String;
  passwordconfirm!: String;
  role: String = 'ADMIN';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  onRegisterSubmit() {
    const userinfo = {

      "name": this.name,
      "username": this.username,
      "password": this.password,
      "passwordconfirm": this.passwordconfirm,
      "role": this.role
    }
    //Register User
    this.authService.registerUser(userinfo).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/tabs']);
      } else {
        this.router.navigate(['/register']);
        console.log('it works here well1111');
      }
    });
  }

}
