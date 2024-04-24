import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageListComponent } from './page-list/page-list.component';
import { AgenciesRoutingModule } from './agencies-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgenciesRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AgenciesModule { }
