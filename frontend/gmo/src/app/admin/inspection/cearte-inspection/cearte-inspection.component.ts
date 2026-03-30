import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminServerService } from '../../../admin-server.service';
import { GoogleMap } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-cearte-inspection',
  standalone: true,
  imports: [FormsModule, CommonModule, GoogleMap],
  templateUrl: './cearte-inspection.component.html',
  styleUrl: './cearte-inspection.component.css',
})
export class CearteInspectionComponent implements OnInit {
  constructor(private adminServerService: AdminServerService) {}

  ngOnInit(): void {
    const today = new Date();
    this.date = today.toISOString().split('T')[0];
  }
  type_actife: String[] = [
    'navires',
    'quais',
    'grues',
    'conteneurs',
    'marchandises',
    'equipements',
    'personnels',
  ];
  priorite: String[] = ['faible', 'moyenne', 'elevee'];

  date: string = '';
  type_actife_selected!: String;
  inspecteur: String = '';
  priorite_selected: String = '';
  description: String = '';

  addInspection() {
    const data = {
      date: this.date,
      type_actife: this.type_actife_selected,
      inspecteur: this.inspecteur,
      priority: this.priorite_selected,
      description: this.description,
    };
    if (
      !this.type_actife_selected ||
      !this.inspecteur ||
      !this.priorite_selected ||
      !this.description ||
      !this.date
    ) {
      alert("Choisissez type d'activité");
      return;
    } else {
      this.adminServerService.addInspection(data).subscribe(
        (response) => {
          console.log('Inspection added successfully:', response);
          alert('Inspection added successfully!');
          this.date = '';
          this.type_actife_selected = '';
          this.inspecteur = '';
          this.priorite_selected = '';
          this.description = '';
        },
        (error) => {
          console.error('Error adding inspection:', error);
        },
      );
    }
    console.log(data);
  }

 
}
