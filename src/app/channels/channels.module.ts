import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChannelsRoutingModule } from './channels-routing.module';
import { PageListComponent } from './page-list/page-list.component';



@NgModule({
  declarations: [PageListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChannelsRoutingModule
  ],
})
export class ChannelsModule { }
