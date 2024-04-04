import  { Injectable} from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
    providedIn : 'root',
}) 

export class SnackbarService {

    constructor(private snackBar: MatSnackBar) {}
   showSnackbar(message:any,action:any,duration:any) {
    this.snackBar.open(message);
    let sb = this.snackBar.open(message, action, {
        duration: duration,
        panelClass: ["custom-style"]
      });
      sb.onAction().subscribe(() => {
        sb.dismiss();
      });
   }
}