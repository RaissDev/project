import { Routes } from '@angular/router';
import { CearteInspectionComponent } from './admin/inspection/cearte-inspection/cearte-inspection.component';
import { InspectionListComponent } from './admin/inspection/inspection-list/inspection-list.component';
import { UpdateInspectionComponent } from './admin/inspection/update-inspection/update-inspection.component';
import { UserCreateComponent } from './admin/userss/user-create/user-create.component';
export const routes: Routes = [
    {path: '', component: CearteInspectionComponent},
    {path:'inspection-list', component: InspectionListComponent},
    {path: 'create-inspection', component: CearteInspectionComponent},
    {path: 'update-inspection/:id', component: UpdateInspectionComponent},
    {path: 'create-user', component: UserCreateComponent}
];
