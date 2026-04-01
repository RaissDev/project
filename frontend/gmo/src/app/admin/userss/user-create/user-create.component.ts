import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-user-create',
    standalone: true,
    imports: [FormsModule, CommonModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {



  role:string[] = ['inspector', 'supervisor'];
}
