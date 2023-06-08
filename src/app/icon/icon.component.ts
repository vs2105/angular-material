import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(public _service:MaterialService) { }

  ngOnInit(): void {
  }

  gotoinput(){
   this._service._routes.navigate(['/input'])
  }

}
