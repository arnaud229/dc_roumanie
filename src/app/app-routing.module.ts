import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingninComponent } from './singnin/singnin.component';
import { SingnupComponent } from './singnup/singnup.component';
import { PreselectionComponent } from './preselection/preselection.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardPartenaireComponent } from './dashboard-partenaire/dashboard-partenaire.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { SelectionComponent } from './selection/selection.component';
import { VideosComponent } from './videos/videos.component';
import { EditPreselectComponent } from './edit-preselect/edit-preselect.component';
import { EditSelectComponent } from './edit-select/edit-select.component';
import { CreateDetteComponent } from './create-dette/create-dette.component';

import { EditDetteComponent } from './edit-dette/edit-dette.component';
import { CreateRemboursementComponent } from './create-remboursement/create-remboursement.component';
import { EditRemboursementComponent } from './edit-remboursement/edit-remboursement.component';
import { ViewUserComponent } from './view-user/view-user.component';
const routes: Routes = [
  { path: '', component: SingninComponent },
  { path: '*', component: SingninComponent },

  { path: 'signin', component: SingninComponent },
  { path: 'signup', component: SingnupComponent },
  { path: 'preselection', component: PreselectionComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'editpreselect', component: EditPreselectComponent },
  { path: 'editselect', component: EditSelectComponent },
  { path: 'dashboardAdmin', component: DashboardAdminComponent },
  { path: 'dashboardPartenaire', component: DashboardPartenaireComponent },
  { path: 'dashboardUser', component: DashboardUserComponent },
  { path: 'createdette', component: CreateDetteComponent },
  { path: 'createRemboursement', component: CreateRemboursementComponent },
  { path: 'editdette', component: EditDetteComponent },
  { path: 'editremboursement', component: EditRemboursementComponent },
  { path: 'viewUser', component: ViewUserComponent },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
