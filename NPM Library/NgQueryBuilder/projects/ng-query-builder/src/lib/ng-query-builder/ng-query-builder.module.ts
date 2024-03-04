import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgQueryBuilderComponent } from './ng-query-builder.component';



@NgModule({
  declarations: [
    NgQueryBuilderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NgQueryBuilderComponent
  ],
})
export class NgQueryBuilderModule { }
