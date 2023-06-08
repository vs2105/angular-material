import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { BadgeComponent } from './badge/badge.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ListComponent } from './list/list.component';
import { SelectComponent } from './select/select.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { RadiobtnComponent } from './radiobtn/radiobtn.component';
import { TabComponent } from './tab/tab.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DateComponent } from './date/date.component';
import { GridComponent } from './grid/grid.component';
import { StepperComponent } from './stepper/stepper.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  {
    path:'', component:ButtonComponent
  },
  {
    path:'button-toggle', component:ButtonToggleComponent
  },
  {
    path:'icon', component:IconComponent
  },
  {
    path:'input', component:InputComponent
  },
  {
    path:'badge', component:BadgeComponent
  },
  {
    path:'spinner', component:SpinnerComponent
  },
  {
    path:'menu', component:MenuComponent
  },
  {
    path:'card', component:CardComponent
  },
  {
    path:'tooltip', component:TooltipComponent
  },
  {
    path:'list', component:ListComponent
  },
  {
    path:'select', component:SelectComponent
  },
  {
    path:'snackbar', component:SnackbarComponent
  },
  {
    path:'radiobtn', component:RadiobtnComponent
  },
  {
    path:'tab', component:TabComponent
  },
  {
    path:'checkbox', component:CheckboxComponent
  },
  {
    path:'chips', component:ChipsComponent
  },
  {
    path:'date', component:DateComponent
  },
  {
    path:'grid', component:GridComponent
  },
  {
    path:'stepper', component:StepperComponent
  },
  {
    path:'sidenav', component:SidenavComponent
  },
  {
    path:'toolbar', component:ToolbarComponent
  },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
