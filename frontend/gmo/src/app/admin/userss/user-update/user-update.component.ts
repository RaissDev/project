import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { AdminServerService } from '../../../admin-server.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent implements OnInit {
  constructor(private adminServerService : AdminServerService,
    private rout:ActivatedRoute  ){}
  ngOnInit(): void {
    this.id = Number(this.rout.snapshot.paramMap.get('id'))
    this.adminServerService.getUsers().subscribe((data : any)=>{
      const users = data.find((itms : any) => itms.id === this.id);
      if(users){
        this.name = users.name;
        this.email = users.email;
        this.password = users.password;
        this.phone = users.phone;
        this.role_selected = users.role;
      }
    })
  }
  id:number = 0
  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  role_selected: string ='';
  role: string[] = ['inspector', 'supervisor'];

  update(){
    const data = {
      name : this.name,
      email:this.email,
      password:this.password,
      phone:this.phone,
      role:this.role_selected
    }
    this.adminServerService.updateUser(this.id,data)
  }


}
