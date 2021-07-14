import { TestService } from './test.service';
import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(private resto:TestService,private route:Router)
   {

   }
 
  canActivate():boolean
  {
    if(this.resto.getToken())
    {
      return true
    }
    else
    {
      this.route.navigate(['/login']);
      return false;
    }
  }
}


  


