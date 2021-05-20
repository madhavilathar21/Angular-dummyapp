import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { RegionComponentComponent } from './components/region-component/region-component.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ComparisionComponent } from './components/comparision/comparision.component'


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mainPage', component: HomePageComponent },
  { path: 'adminPage', component: AdminComponent },
  { path: 'compare', component: ComparisionComponent },
  { path: 'regionWise', component: RegionComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
