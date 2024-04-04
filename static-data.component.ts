import { Component } from '@angular/core';
import { SnackbarService } from '../shared/services/snackbar.service';
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
  columnHeader = [
    { field: "Origin" }, { field: "Modification" }, { field: "User" }, { field: "Date"}
  ]
  rowData = [
    // { make: "Toyota", model: "Celica", price: 35000 },
    // { make: "Ford", model: "Mondeo", price: 32000 },
    // { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  rowData1 = [
    {origin:'',modification: 'Test',user:'G1-45124',Date:'27/03/2024 07:00:45'}
  ];
  constructor(
    public snackBarService : SnackbarService
  ) {
    this.innerHeight = window.innerHeight - 90;
    this.btnHeight = window.innerHeight - 560;

  }

  ngOnInit() {
    this.snackBarService.showSnackbar('Show Error Message Show Error MessageShow Error MessageShow Error Message Show Error Message','close','100000');
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
