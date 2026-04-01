import { Component, OnInit } from '@angular/core';
import { AdminServerService } from '../../../admin-server.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-inspection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-inspection.component.html',
  styleUrl: './update-inspection.component.css',
})
export class UpdateInspectionComponent implements OnInit {
  constructor(
    private adminServerService: AdminServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.adminServerService.gitInspection().subscribe((data: any) => {
        const inspection = data.find((item: any) => item.id === this.id);
        if (inspection) {
          this.date = inspection.date.split('T')[0];
          this.type_actife_selected = inspection.type_actife;
          this.inspecteur = inspection.inspecteur;
          this.priorite_selected = inspection.priority;
          this.description = inspection.description;
        }
                  console.log(inspection);

      });
    }

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
  id:number = 0;
  date: string = '';
  type_actife_selected!: String;
  inspecteur: String = '';
  priorite_selected: String = '';
  description: String = '';
  updateInspection() {
    const updatedData = {
      date: this.date,
      type_actife: this.type_actife_selected,
      inspecteur: this.inspecteur,
      priorite: this.priorite_selected,
      description: this.description,
    };
    this.adminServerService.UpdateInspection(this.id, updatedData).subscribe(() => {
      alert('Inspection updated successfully');});
      this.router.navigate(['/inspection-list']);
  }

}
