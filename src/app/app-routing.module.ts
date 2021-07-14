import { ListuserComponent } from './listuser/listuser.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegistrationComponent
},
{
  path:'home',
  component:HomeComponent,
  canActivate:[AuthGuard]
},
{
  path:'listuser',
  component:ListuserComponent,
  
},

{
  path:'add',
  component:AddRestoComponent,
  canActivate:[AuthGuard]
},
{
  path:'contact',
  component:ContactComponent
},

{
  path:'update/:id',
  component:UpdateRestoComponent,
  canActivate:[AuthGuard]
},
{
  path:'list',
  component:ListRestoComponent,
  canActivate:[AuthGuard]
},

{
  path:'**',
  pathMatch:'full',
  component:HeaderComponent

},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
