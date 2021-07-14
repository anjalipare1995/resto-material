import { MaterialModuleModule } from './material-module/material-module.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';

import { ContactComponent } from './contact/contact.component';
import { ListuserComponent } from './listuser/listuser.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderComponent,
    ListRestoComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    NavbarComponent,
    Navbar2Component,
    ContactComponent,
    ListuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    FlexLayoutModule,
    MaterialModuleModule
   
    
 
  ],
  providers: [AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
