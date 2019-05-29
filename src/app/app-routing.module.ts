import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { FormComponent } from './containers/form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forms', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
