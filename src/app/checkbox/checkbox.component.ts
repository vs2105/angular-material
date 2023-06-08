import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checkedstatus:boolean=false
  constructor(public _service:MaterialService) { }

  ngOnInit(): void {

  }
  chekboxsatatus(e:any){
   console.log('checkbox status is',e.checked);
    if(e.checked == true){
     this._service._snackBar.open("check box checked","dismiss",{
      horizontalPosition:'center',
      verticalPosition:'top'
     })
    }else{
      this._service._snackBar.open("check box not checked","dismiss",{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:2000
      })
    }
  }
  gotochips(e:any){
   this._service._routes.navigate(['/chips'])
  }

}
