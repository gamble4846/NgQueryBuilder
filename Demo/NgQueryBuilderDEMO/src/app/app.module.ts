import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgQueryBuilderModule } from 'ng-query-builder';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { DemoComponent } from './DemoComponent/demo.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQueryBuilderModule,
    NgxJsonViewerModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzGridModule,
    NzButtonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
