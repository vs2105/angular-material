import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobtn',
  templateUrl: './radiobtn.component.html',
  styleUrls: ['./radiobtn.component.scss']
})
export class RadiobtnComponent implements OnInit {
   gender:string="male"
   selectedseason:string='winter'
   seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor() { }

  ngOnInit(): void {
  }

}
