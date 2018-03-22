import { Component, OnInit } from '@angular/core';
import { CrudTraingService } from '../../../providers/crud-traing.service';

@Component({
  selector: 'app-admin-traing',
  templateUrl: './admin-traing.component.html',
  styleUrls: ['./admin-traing.component.css']
})
export class AdminTraingComponent implements OnInit {
  traings: any;
  errors: any = {
    errorAll: false,
    errorPass: false,
    errorUser: false,
    none: false
  };

  constructor( private _crud: CrudTraingService) { }

  ngOnInit() {
    this._crud.readFunction().subscribe( res => {
      console.log(res);
      this.traings = res;
    });
  }
}
