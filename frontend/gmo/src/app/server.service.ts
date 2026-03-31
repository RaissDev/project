import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {  }
  url = 'http://localhost:3004/';

  getInspectionList() {
    return this.http.get<any[]>(this.url + 'inspection-list');
  }
}
