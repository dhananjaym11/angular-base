import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { FormComponent } from './modules/form/pages/form/form.component';
import { UsersComponent } from './modules/users/pages/users/users.component';
import { SharedModule } from './modules/shared/shared.module';
import { TokenInterceptor } from './modules/shared/services/token.interceptor';
import { UserListComponent } from './modules/users/components/user-list/user-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { LogoutComponent } from './modules/home/pages/logout/logout.component';
import { PersonFormComponent } from './modules/form/components/person-form/person-form.component';
import { ReactiveFormComponent } from './modules/angular-form/pages/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './modules/angular-form/pages/template-form/template-form.component';
import { PersonReactiveFormComponent } from './modules/angular-form/components/person-reactive-form/person-reactive-form.component';
import { PersonTemplateFormComponent } from './modules/angular-form/components/person-template-form/person-template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    UsersComponent,
    UserListComponent,
    LoginComponent,
    AppHomeComponent,
    LogoutComponent,
    PersonFormComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    PersonReactiveFormComponent,
    PersonTemplateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }