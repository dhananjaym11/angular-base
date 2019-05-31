import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    UsersComponent,
    UserListComponent,
    LoginComponent,
    AppHomeComponent,
    LogoutComponent
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
