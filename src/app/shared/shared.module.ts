import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { TableComponent } from './table/table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, TitleComponent, PaginatorComponent, ContainerComponent, TableComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    FlexModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    TitleComponent,
    PaginatorComponent,
    ContainerComponent,
    TableComponent,
    NgScrollbarModule,
    FlexModule
  ]
})
export class SharedModule { }
