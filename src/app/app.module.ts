import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home.component';
import { FormComponent } from './modules/form/pages/form.component';
import { UsersComponent } from './modules/users/pages/users.component';
import { SharedModule } from './modules/shared/shared.module';
import { TokenInterceptor } from './modules/shared/services/token.interceptor';
import { UserListComponent } from './modules/users/components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    UsersComponent,
    UserListComponent
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
