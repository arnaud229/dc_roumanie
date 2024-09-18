import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingninComponent } from './singnin/singnin.component';
import { SingnupComponent } from './singnup/singnup.component';
import { PreselectionComponent } from './preselection/preselection.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardPartenaireComponent } from './dashboard-partenaire/dashboard-partenaire.component';

@NgModule({
  declarations: [
    AppComponent,
    SingninComponent,
    SingnupComponent,
    PreselectionComponent,
    DashboardUserComponent,
    DashboardAdminComponent,
    DashboardPartenaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }