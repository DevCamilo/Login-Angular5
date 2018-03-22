import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../providers/crud.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  users: any;
  userModify: any;
  errors: any = {
    errorAll: false,
    errorPass: false,
    errorUser: false,
    none: false
  };

  constructor(private _crud: CrudService) {
    this.userModify = {
      id_user: '',
      user_name: '',
      user_lastName: '',
      user_password: '',
    };
  }

  ngOnInit() {
    this.again();
    /* Fibonacci Rules MotherFuc#$%&
      let i = 1;
      let a = 1;
      let b = 0;
      while (i < 10) {
        a = a + b;
        b = a + b;
        console.log(a);
        console.log(b);
      i = i + 1;
    }
    */
  }

  again() {
    this._crud.readFunction().subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }

  clear() {
    this.errors.none = false;
    this.errors.errorAll = false;
    this.errors.errorPass = false;
    this.errors.errorUser = false;
    this.userModify.id_user = '';
    this.userModify.user_name = '';
    this.userModify.user_lastName = '';
  }

  deleteFunction(user) {
    // console.log(user.id_user);
    this._crud.deleteFunction(user).subscribe(res => {
      // console.log(res);
      this.again();
    });
  }

  show(user) {
    // console.log(user);
    this.clear();
    this.userModify.id_user = user.id_user;
    this.userModify.user_name = user.user_name;
    this.userModify.user_lastName = user.user_lastName;
  }

  onSubmit() {
    if (this.userModify.user_name && this.userModify.user_lastName !== '') {
        this.errors.errorPass = false;
        this.errors.errorAll = false;
        console.log(this.userModify);
        this._crud.updateFunction(this.userModify).subscribe(res => {
          // console.log(res);
          this.again();
          this.errors.none = true;
        });
    } else {
      this.errors.errorPass = false;
      this.errors.errorAll = true;
    }
  }

  createUser() {
    if (this.userModify.name && this.userModify.password !== '') {
      if (this.userModify.password.length <= 7) {
        this.errors.errorAll = false;
        this.errors.errorPass = true;
      } else {
        this.errors.errorPass = false;
        this.errors.errorAll = false;
        console.log(this.userModify);
        this._crud.createFunction(this.userModify).subscribe(res => {
          // console.log(res);
          this.again();
          this.errors.none = true;
        });
      }
    } else {
      this.errors.errorPass = false;
      this.errors.errorAll = true;
    }
  }
}
