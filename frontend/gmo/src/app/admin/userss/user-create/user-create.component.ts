import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminServerService } from '../../../admin-server.service';
@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {
  constructor(private adminService: AdminServerService) {}

  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  role: string[] = ['inspector', 'supervisor'];

  createUser() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      role: this.role,
    };
    if (
      !this.name ||
      !this.email ||
      !this.password ||
      !this.phone ||
      !this.role
    ) {
      return alert('your information is complet');
    } else {
      this.adminService.addUser(userData).subscribe(() => {
        console.log('User created:');
        alert('User created successfully!');
        // Optionally, reset the form fields after successful creation
        this.name = '';
        this.email = '';
        this.password = '';
        this.phone = '';
        this.role = ['inspector', 'supervisor'];
      });
    }
  }
}
