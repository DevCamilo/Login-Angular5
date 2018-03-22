import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.css']
})
export class RecoverPassComponent implements OnInit {
  user: any;
  errors: any = {
    errorAll: false,
    errorEmail: false,
    errorUser: false
  };

  constructor() {
    this.user = {
      user_nickName: '',
      user_email: ''
    };
  }

  onSubmit() {
    if (this.user.user_nickName && this.user.user_email !== '') {
      this.errors.errorAll = false;
    } else {
      this.errors.errorAll = true;
      return null;
    }
  }

  ngOnInit() { }

}
