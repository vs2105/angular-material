import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import {MatInputModule} from '@angular/material/input';
import { InputComponent } from './input/input.component';
import { BadgeComponent } from './badge/badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { TooltipComponent } from './tooltip/tooltip.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ListComponent } from './list/list.component';
import {MatDividerModule} from '@angular/material/divider';
import { SelectComponent } from './select/select.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RadiobtnComponent } from './radiobtn/radiobtn.component';
import {MatRadioModule} from '@angular/material/radio';
import { TabComponent } from './tab/tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import {MatChipsModule} from '@angular/material/chips';
import { DateComponent } from './date/date.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { GridComponent } from './grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';

const matmodules=[
  MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatMenuModule,
    MatCardModule,
    MatBottomSheetModule,
    MatListModule,
    MatTooltipModule,
    MatDividerModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatRadioModule,
    MatTabsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatStepperModule,
    MatSidenavModule,
    MatToolbarModule
]

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconComponent,
    InputComponent,
    BadgeComponent,
    SpinnerComponent,
    MenuComponent,
    CardComponent,
    BottomsheetComponent,
    TooltipComponent,
    ListComponent,
    SelectComponent,
    DialogComponent,
    SnackbarComponent,
    RadiobtnComponent,
    TabComponent,
    CheckboxComponent,
    ChipsComponent,
    DateComponent,
    GridComponent,
    StepperComponent,
    SidenavComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
     ...matmodules
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
