import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminServerService } from '../../../admin-server.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterOutlet,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  constructor(private adminServerService : AdminServerService){}
  ngOnInit(): void {
    this.getusers();
  }

  users:any[] = []


  getusers(){
    this.adminServerService.getUsers().subscribe((data:any) =>{
      this.users = data
    })
  }

  deleteUser(id:number){
    this.adminServerService.deleteUser(id).subscribe(()=>{
      alert('user delete successfully :)')
    })
  }

}
