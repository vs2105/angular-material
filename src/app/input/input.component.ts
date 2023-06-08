import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(public _service:MaterialService) { }

  ngOnInit(): void {
  }


  gotobadge(){
   this._service._routes.navigate(['/badge'])
  }

  spinnerenterdvalue(e:any){
    console.log("spinner value",e.target.value);
    this._service.spinnerpercent=e.target.value
    
  }
  progressenterdvalue(e:any){
    console.log("progress value",e.target.value);
    this._service.progresspercent=e.target.value
  }
}
