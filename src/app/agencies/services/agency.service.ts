import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from '../model/agency.model';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  url: string = '/api/agencias/';

  constructor(private HttpClient: HttpClient) {

  }

  loadAgencies(): Observable<Agency>{
    return this.HttpClient.get<Agency>(this.url, {});
  }

  loadAgency(id:string): Observable<Agency>{
    return this.HttpClient.get<Agency>(this.url + id, {});
  }

  addAgency(agency: Agency): Observable<Agency>{
    return this.HttpClient.post<Agency>(this.url, agency);
  }

  updateAgency(id: string, agency: Agency): Observable<Agency>{
    return this.HttpClient.put<Agency>(this.url+id, agency);
  }

  deleteAgency(id: string): Observable<Agency>{
    return this.HttpClient.delete<Agency>(this.url+id);
  }

}
