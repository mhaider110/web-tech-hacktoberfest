import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributorsComponent } from './components/contributors/contributors.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'contributors', component: ContributorsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
