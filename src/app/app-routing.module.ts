import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationValidationService } from './modules/shared/services/authentication-validation.service';
import { LoginComponent } from './pages/login/login.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { FormComponent } from './modules/form/pages/form/form.component';
import { ReactiveFormComponent } from './modules/angular-form/pages/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './modules/angular-form/pages/template-form/template-form.component';
import { UsersComponent } from './modules/users/pages/users/users.component';
import { LogoutComponent } from './modules/home/pages/logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: AppHomeComponent,
    canActivate: [AuthenticationValidationService],
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'forms', component: FormComponent },
      {
        path: 'angular-forms',
        children: [
          { path: '', redirectTo: 'reactive-form', pathMatch: 'full' },
          { path: 'reactive-form', component: ReactiveFormComponent },
          { path: 'template-form', component: TemplateFormComponent },
        ]
      },
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
