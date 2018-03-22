import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../providers/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  errors: any = {
    errorAll: false,
    errorPass: false,
    errorUser: false,
    errorUserLog: false
  };

  constructor(private _login: CrudService, private _router: Router) {
    this.user = {
      user_nickName: '',
      user_password: ''
    };
  }

  onSubmit() {
    if (this.user.user_nickName && this.user.user_password !== '') {
      if (this.user.user_password.length <= 7) {
        this.errors.errorUserLog = false;
        this.errors.errorAll = false;
        this.errors.errorPass = true;
      } else {
        this.errors.errorUserLog = false;
        this.errors.errorPass = false;
        this.errors.errorAll = false;
        // console.log(this.user);
        this._login.loginFunction(this.user)
          .subscribe(res => {
            // console.log(res);
            if (res.status === 'true') {
              localStorage.setItem('name', res.user.user_name);
              localStorage.setItem('id', res.id_user);
              return this._router.navigate(['/dashBoard']);
            } else {

            }
          });
      }
    } else {
      this.errors.errorUserLog = false;
      this.errors.errorPass = false;
      this.errors.errorAll = true;
    }
  }

  ngOnInit() { }

}
