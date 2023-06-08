import { Component, OnInit } from '@angular/core';
import { Isection } from '../matrial/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  

  constructor() { }
  folders: Isection[] = [
    {
      name: 'home',
      updated: new Date('1/1/16'),
      icon:'home'
    },
    {
      name: 'videos',
      updated: new Date('1/17/16'),
      icon:'video_library'
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
      icon:'email'
    },
  ];

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  ngOnInit(): void {
  }

}
