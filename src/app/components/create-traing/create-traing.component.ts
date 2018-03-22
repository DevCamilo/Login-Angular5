import { Component, OnInit } from '@angular/core';
import { CrudTraingService } from '../../providers/crud-traing.service';

@Component({
  selector: 'app-create-traing',
  templateUrl: './create-traing.component.html',
  styleUrls: ['./create-traing.component.css']
})
export class CreateTraingComponent implements OnInit {
  userCreate: any;
  idUser = localStorage.getItem('id');

  constructor( private _crud: CrudTraingService ) {
    this.userCreate = {
      activity: '',
      objective: '',
      nameTraing: '',
      resources: '',
      coverage: '',
      periodicity: '',
      duration: '',
      responsable: this.idUser
    };
  }

  ngOnInit() { }

  createTraing() {
    // console.log(this.userCreate);
    this._crud.createFunction(this.userCreate).subscribe( res => {
      console.log(res);
      alert ('The Training was created');
    });
  }
}
