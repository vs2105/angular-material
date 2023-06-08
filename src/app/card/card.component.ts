import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  longText:string="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusantium consequatur voluptate, animi deleniti, consectetur repudiandae impedit incidunt corrupti tenetur quaerat explicabo cumque totam recusandae modi, ducimus aspernatur reprehenderit? Earum!"
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(){
    this._bottomSheet.open(BottomsheetComponent)
  }

}
