import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { FormComponent } from './modules/form/pages/form/form.component';
import { UsersComponent } from './modules/users/pages/users/users.component';
import { LogoutComponent } from './modules/home/pages/logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: AppHomeComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'forms', component: FormComponent },
      { path: 'users', component: UsersComponent },
      { path: 'logout', component: LogoutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
