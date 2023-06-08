import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
   spinnerpercent:number=60
   progresspercent:number=20
  constructor(public _service:MaterialService) { }

  ngOnInit(): void {
    this.spinnerpercent=this._service.spinnerpercent
    this.progresspercent=this._service.progresspercent
  }

  enterdvalue(e:any){
     console.log(e.target.value);
    //  this.spinnerpercent=e.target.value
     
  }

}
