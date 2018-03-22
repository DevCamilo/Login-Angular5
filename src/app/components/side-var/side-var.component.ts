import { Component, OnInit } from '@angular/core';
import { CrudTraingService } from '../../providers/crud-traing.service';

@Component({
  selector: 'app-side-var',
  templateUrl: './side-var.component.html',
  styleUrls: ['./side-var.component.css']
})
export class SideVarComponent implements OnInit {
  name = localStorage.getItem('name');
  traing: any;
  constructor(private _crud: CrudTraingService) { }

  clearLocal() {
    localStorage.removeItem('name');
  }

  ngOnInit() {
    /*this._crud.readFunction().subscribe( res => {
      this.traing = res;
      // (console.log(this.traing);
    });*/
  }

}
