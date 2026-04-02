import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminServerService } from '../../../admin-server.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  constructor(private serve : AdminServerService){}
  ngOnInit(): void {
    this.getusers();
  }

  users:any[] = []


  getusers(){
    this.serve.getUsers().subscribe((data:any) =>{
      this.users = data
    })
  }

  deleteUser(id:number){
    
  }

}
