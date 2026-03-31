import { Routes } from '@angular/router';
import { CearteInspectionComponent } from './admin/inspection/cearte-inspection/cearte-inspection.component';
import { InspectionListComponent } from './admin/inspection/inspection-list/inspection-list.component';
export const routes: Routes = [
    {path: '', component: CearteInspectionComponent},
    {path:'inspection-list', component: InspectionListComponent}
];
