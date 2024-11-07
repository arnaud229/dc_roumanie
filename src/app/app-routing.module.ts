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
import { CreateRembourssementComponent } from './create-rembourssement/create-rembourssement.component';
import { EditDetteComponent } from './edit-dette/edit-dette.component';
import { EditRembourssementComponent } from './edit-rembourssement/edit-rembourssement.component';

const routes: Routes = [
  { path: '', component: SingninComponent },

  { path: 'signin', component: SingninComponent },
  { path: 'signup', component: SingnupComponent },
  { path: 'preselection', component: PreselectionComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'editpreselect', component: EditPreselectComponent },
  { path: 'editselect', component: EditSelectComponent },
  { path: 'dashboardAdmin', component: DashboardAdminComponent },
  { path: 'dashboardPartenaire', component: DashboardPartenaireComponent },
  { path: 'createdette', component: CreateDetteComponent },
  { path: 'createrembourssement', component: CreateRembourssementComponent },
  { path: 'editdette', component: EditDetteComponent },
  { path: 'editrembourssement', component: EditRembourssementComponent },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
