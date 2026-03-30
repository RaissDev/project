import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminServerService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3004/';


  gitInspection(){
    return this.http.get(this.url + 'inspection');
  }

  addInspection(data:any){
    return this.http.post(this.url + 'inspection/add', data);
  }
}
