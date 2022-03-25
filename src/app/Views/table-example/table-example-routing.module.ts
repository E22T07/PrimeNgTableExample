import { NgModule } from '@angular/core';
// @ts-ignore
import { TableExampleComponent } from './table-example.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: TableExampleComponent,
    data: {
      title: 'Table Component'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableExampleRoutingModule { }
