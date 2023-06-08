import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, public _service:MaterialService) {dialogRef.disableClose=true }

  ngOnInit(): void {
  }

  ondialogclose(){
    this.dialogRef.close()
    this._service._routes.navigate(['/snackbar'])
  }

}
