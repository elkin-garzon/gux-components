import { NgModule } from '@angular/core';
import { GuxComponent } from './gux.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    GuxComponent,
    AutoCompleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GuxComponent,
    AutoCompleteComponent
  ]
})
export class GuxModule { }
