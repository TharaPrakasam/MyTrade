import { Component } from '@angular/core';

@Component({
  selector: 'app-static-data',
  templateUrl: './static-data.component.html',
  styleUrls: ['./static-data.component.css']
})
export class StaticDataComponent {

  public innerHeight:any;
  public btnHeight: any;
  public fxFlexForCol1: any = 50;
  public fxFlexForCol2: any = 50;
  public isHideFirstCol: boolean = true;
  columnDefs = [{ field: "Client Name" }, { field: "Config Type" }, { field: "Created By" }, { field: "Configuration Date"}];

  rowData = [
    // { make: "Toyota", model: "Celica", price: 35000 },
    // { make: "Ford", model: "Mondeo", price: 32000 },
    // { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  constructor() {
    this.innerHeight = window.innerHeight - 90;
    this.btnHeight = window.innerHeight - 560;

  }

  fullscreen() {
    if(this.fxFlexForCol1 == 50) {
      this.isHideFirstCol = false;
      this.fxFlexForCol1= 0;
      this.fxFlexForCol2 = 100;
    } 
    else {
      this.isHideFirstCol = true;
      this.fxFlexForCol1= 50;
      this.fxFlexForCol2 = 50;
    }  
  }

}
