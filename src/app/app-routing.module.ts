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

const routes: Routes = [
  { path: '', component: SingninComponent },
  { path: 'signin', component: SingninComponent },
  { path: 'signup', component: SingnupComponent },
  { path: 'preselection', component: PreselectionComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'dashboardAdmin', component: DashboardAdminComponent },
  { path: 'dashboardPartenaire', component: DashboardPartenaireComponent },
  { path: 'dashboardUser', component: DashboardUserComponent },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
