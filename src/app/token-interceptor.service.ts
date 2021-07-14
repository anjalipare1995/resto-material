import { TestService } from './test.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor
{

  constructor( private resto:TestService) { }


   intercept(req:any,next:any)
   {
     let tokenizedReq = req.clone(
     {
       setHeaders:{
         Authorization: `Bearer  ${this.resto.getTokenInterceptor()}`
         }
         
       }
     
     )
     return next.handle(tokenizedReq)
   }
}
