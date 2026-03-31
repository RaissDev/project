import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminServerService } from '../../../admin-server.service';
@Component({
  selector: 'app-inspection-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inspection-list.component.html',
  styleUrl: './inspection-list.component.css'
})
export class InspectionListComponent implements OnInit {

  constructor(private adminServerService: AdminServerService) { }

  ngOnInit(): void {
    this.getInspectionList();
  }


  inspectionList: any[] = [];
  getInspectionList() {
    this.adminServerService.gitInspection().subscribe((data: any) => {
      this.inspectionList = data;
    }); 
  }
  deleteInspection(id:any){
    this.adminServerService.deleteInspection(id).subscribe((response) => {
      alert('Inspection deleted successfully');
      console.log('Inspection deleted successfully:', response);
      this.getInspectionList();
    }, (error) => {
      console.error('Error deleting inspection:', error);
    }); 
  }
}
