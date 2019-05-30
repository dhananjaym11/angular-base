import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/pages/home.component';
import { FormComponent } from './modules/form/pages/form.component';
import { UsersComponent } from './modules/users/pages/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forms', component: FormComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
