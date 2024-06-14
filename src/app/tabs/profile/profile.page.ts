import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AlertController, LoadingController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user!: any;
  name!: String;
  username!: String;
  displayedUsername!: string;
  email!: String;
  phonenumber!: Number;
  role: String = 'STUDENT';
  accountBalance!: String;
  id!: String;
  paidSubjects: any[] = [];

  logout!: String;

  constructor(    private authService: AuthService,
    private location: Location,
    private http: HttpClient,
    private dataTransferService: DataTransferService,
    private router: Router,
    public alertController: AlertController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.user=this.dataTransferService.getAdminInfo();
    this.id = this.user['id'];
    this.name = this.user['name'];
    this.username = this.logout = this.user['username'];
    this.displayedUsername = this.user['username'];
    this.email = this.user['email'];
    this.phonenumber = this.user['phonenumber'];
    this.role = this.user['role'];
    this.accountBalance = this.user['accountBalance'];
  }

  onLogoutClick() {
    const userinfo = {
      username: this.logout,
    };
    this.authService.logoutserverstatus(userinfo).subscribe((data) => {
      if (data.success) {
        console.log('Logged out');
        this.authService.logout();
        this.router.navigate(['/']);
      } else {
        console.log('Not Logged out');
      }
    });
    return false;
  }


}
