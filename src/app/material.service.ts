import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  spinnerpercent:number=60;
  progresspercent:number=80
  constructor(public _routes:Router,public _snackBar: MatSnackBar) { }
}
