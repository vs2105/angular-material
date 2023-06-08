import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(public _service:MaterialService) { }

  ngOnInit(): void {

  }

  openSnackBar(){
    this._service._snackBar.open('Are you ready for new challenges!!!','yeah',{
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }

}
