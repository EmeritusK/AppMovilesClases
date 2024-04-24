import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from './../interfaces/metacolumn.interface';
import { Component, ContentChildren, Input, input, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { Agency } from '../../agencies/model/agency.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];

  @ContentChildren(MatColumnDef, {descendants: true}) columnDef!:QueryList<MatColumnDef>;
  @ViewChild(MatTable, {static:true}) table!:MatTable<Agency>;

  columns: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['metaDataColumns']){
      this.columns = this.metaDataColumns.map(column => column.field);
    }
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    if (!this.columnDef) {return}
    this.columnDef.forEach(column => {
      this.columns.push(column.name);
      
    });
  }
}
