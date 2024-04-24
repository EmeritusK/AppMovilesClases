  import { Component } from '@angular/core';
  import { MetaDataColumn } from '../../shared/interfaces/metacolumn.interface';
  import { environment } from '../../../environments/environment.development';
  import { AgencyService } from '../services/agency.service';
import { Agency } from '../model/agency.model';


  export interface IAgency {
    id: string;
    name: string;
    address: string;
  }


  @Component({
    selector: 'app-page-list',
    templateUrl: './page-list.component.html',
    styleUrl: './page-list.component.css'
  })
  export class PageListComponent {
    data: IAgency[] = [];

    metaDataColumns: MetaDataColumn[] = [
      {field:'_id', title:'Código'},
      {field:'name', title:'Agencia'},
      {field:'address', title:'Dirección'},
    ];

    records: IAgency[] = [];
    totalRecords = this.data.length;

    constructor(private agency: AgencyService){
      this.loadAgencys();
    }

    loadAgencys(){
      // this.records = this.data;
      // this.totalRecords = this.records.length;
      // this.changePage(0);
      this.agency.loadAgencies()
        .subscribe( (data:any) => {
          console.log(data);
          this.records = data;
          this.totalRecords = this.records.length;
          this.changePage(0);
        });
    }

    changePage(page: number){
      const pageSize: number = environment.PAGE_SIZE;
      const skip: number = pageSize * page;
      this.data = this.records.slice(skip, skip + pageSize);
    }

    openForm(row: Agency){

    }

    delete(row: Agency){

    }
  }
