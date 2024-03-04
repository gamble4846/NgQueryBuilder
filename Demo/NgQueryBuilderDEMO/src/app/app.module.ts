import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgQueryBuilderModule } from 'ng-query-builder';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQueryBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
