import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private _service:MaterialService) { }

  ngOnInit(): void {
  }

  onproceed(){
    this._service._routes.navigate(['/button-toggle'])
  }

}
