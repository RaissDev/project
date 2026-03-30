import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-inspection',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-inspection.component.html',
  styleUrl: './create-inspection.component.css'
})
export class CreateInspectionComponent {

}
