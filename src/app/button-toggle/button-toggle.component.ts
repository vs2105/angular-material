import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

  constructor(private _service:MaterialService) { }

  ngOnInit(): void {
    
  }
  tglval(e : any){
   console.log("selected toggle value", e.value);
   
  }
  toggleval(v:any){
    console.log('value',v.value);
    
  }
  togglevalue(k:any){
    console.log('value', k.value);
    
  }
  gotoicons(){
   this._service._routes.navigate(['/icon'])
  }

}
