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
  deleteInspection(id:any){
    return this.http.delete(this.url + 'inspection/delete/' + id);
  }

  addInspection(data:any){
    return this.http.post(this.url + 'inspection/add', data);
  }

  UpdateInspection(id:any, data:any){
    return this.http.put(this.url + 'inspection/update/' + id, data);
  }
}
