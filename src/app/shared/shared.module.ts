import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRippleDirective } from './directives/ui-ripple/ui-ripple.directive';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiCardComponent } from './components/ui-card/ui-card-main/ui-card-main.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    UiRippleDirective,
    UiButtonComponent,
    UiCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    UiRippleDirective,
    UiButtonComponent,
    UiCardComponent
  ]
})
export class SharedModule { }
