
import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';

@Component({
  
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  constructor(public _service:MaterialService) { }

  ngOnInit(): void {
  }

  gotodate(){
  console.log(this._service._routes.navigate(['/date']));

  }

}
