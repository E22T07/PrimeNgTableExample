import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPrimeNgTableComponent } from './components/demo-prime-ng-table/demo-prime-ng-table.component';
import { TableModule } from 'primeng/table';
import { TableExampleComponent } from './Views/table-example/table-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoPrimeNgTableComponent,
    TableExampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
