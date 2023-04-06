import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { LoadDtOptionsWithPromiseComponent } from './load-dt-options-with-promise/load-dt-options-with-promise.component';
import { DtInstanceComponent } from './dt-instance/dt-instance.component';
import { MultipleTablesComponent } from './multiple-tables/multiple-tables.component';
import { RowClickEventComponent } from './row-click-event/row-click-event.component';
import { WithAjaxComponent } from './with-ajax/with-ajax.component';

@NgModule({
  declarations: [
    AppComponent,
    WithAjaxComponent,
    RowClickEventComponent,
    MultipleTablesComponent,
    DtInstanceComponent,
    LoadDtOptionsWithPromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
