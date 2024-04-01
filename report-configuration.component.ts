import { Component } from '@angular/core';
import { ColDef, } from 'ag-grid-community';


@Component({
  selector: 'app-report-configuration',
  templateUrl: './report-configuration.component.html',
  styleUrls: ['./report-configuration.component.css']
})
export class ReportConfigurationComponent {

  public innerWidth: any;
  public innerHeight: any;
  public divHeight: any;
  public divColHeight : any;
  public firstDiv: any;
  public scondDiv: any;
rowData = [
    // { con: "", Configuration: "", Service: '', Archive: '', Favorite: '' },
  ];

  rowData1 = [];

  colDefs: ColDef[] = [
    { field: "con",width: 90, minWidth: 50, maxWidth: 100,suppressSizeToFit: false },
    { field: "Configuration",width: 90, minWidth: 50, maxWidth: 100,suppressSizeToFit: false },
    { field: "Service",width: 90, minWidth: 50, maxWidth: 100,suppressSizeToFit: false },
    { field: "Archive",width: 90, minWidth: 50, maxWidth: 100,suppressSizeToFit: false },
    { field: "Favorite",width: 90, minWidth: 50, maxWidth: 100,suppressSizeToFit: false }
  ];

  colDefs1: ColDef[] = [
    { field: "Report Configuration",width: 90, minWidth: 50, maxWidth: 100,suppressSizeToFit: false },
    { field: "Quick",width: 90, minWidth: 50, maxWidth: 100,suppressSizeToFit: false },
    { field: "Run Status",width: 90, minWidth: 50, maxWidth: 100,suppressSizeToFit: false },
    { field: "Favorite",width: 90, minWidth: 50, maxWidth: 100,suppressSizeToFit: false }
  ];

  constructor() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight - 90;
    this.divHeight = window.innerHeight-185;
    this.divColHeight = window.innerHeight-10;
    this.firstDiv = this.innerHeight/2;
  }
}
