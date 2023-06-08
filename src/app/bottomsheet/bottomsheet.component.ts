import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.scss']
})
export class BottomsheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>) { }

  ngOnInit(): void {
  }

  dismissshit(){
   this._bottomSheetRef.dismiss()

  }
}
