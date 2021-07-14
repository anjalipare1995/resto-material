import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TestService } from '../test.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent
{
  register =
   {
        name: '',
        email:'',
        password: ''
   }
   

  
  constructor(public resto:TestService ,private router:Router,private cookie:CookieService) 
  { }

    

  
  collection()
  {
    console.log(this.register);
    
    this.resto.registerUser(this.register).subscribe((result:any)=>
    {
         localStorage.setItem("name",result.name)
        this.cookie.set('name',result)
        
         this.router.navigate(['/login'])
    })


  //   this.resto.commingData(this.regForm);
  //   {
  //     this.router.navigate(['/login']);
  // }

  }
}
