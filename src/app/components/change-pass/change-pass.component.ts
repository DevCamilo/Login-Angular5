import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  user: any;
  errors: any = {
    errorAll: false,
    errorPass: false,
    errorUser: false
  };

  constructor() {
    this.user = {
      user_nickName: '',
      user_password: '',
      user_passwordNew: '',
      user_passwordRepeat: ''
    };
  }

  onSubmit() {
    if (this.user.user_nickName && this.user.user_password &&
      this.user.user_passwordNew && this.user.user_passwordRepeat !== '') {
      if (this.user.user_passwordNew !== this.user.user_passwordRepeat) {
        this.errors.errorAll = false;
        this.errors.errorPass = true;
        return null;
      }
      this.errors.errorAll = false;
      this.errors.errorPass = false;
    } else {
      this.errors.errorPass = false;
      this.errors.errorAll = true;
      return null;
    }
  }

  ngOnInit() { }

}
