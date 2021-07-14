import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
// 1 for form in html
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit,OnDestroy {
  alert:boolean=false;
  deviceXs:any;
  mediaSub:any=Subscription;
   
  AddResto:any;
   addRestoForm()
   {
     this.AddResto=this.FormBuilder.group({
    //form control means name,address,email
    name:new FormControl('' ,[Validators.required]),
    email:new FormControl('' ,[Validators.required]),
    address:new FormControl('' ,[Validators.required]),
    //Date:new FormControl(''),
      
   date:new FormControl(Date())
  })
}
  

  constructor(private resto:TestService,private route:Router,private MediaObserver:MediaObserver ,private FormBuilder:FormBuilder) 
  {
        this.addRestoForm();
   }

  ngOnInit(): void 
  {
     this.mediaSub=this.MediaObserver.media$.subscribe((result:MediaChange)=>
     {
       console.log(result.mqAlias);
       this.deviceXs=result.mqAlias === 'xs' ? true:false;
     })    

     

  }

  ngOnDestroy():void
  {
      this.mediaSub.unsubscribe();
  }

   //3 use method with ngSubmit in html and define here
  collectResto()
   {//3
     console.log(this.AddResto.value)
      
       this.resto.saveResto(this.AddResto.value).subscribe((result)=>
       {
              console.log("result is here",result);
              this.alert=true;
              //reset form after fill
              this.AddResto.reset({})
              this.route.navigate(['/list'])
       })
      

   }
   closeAlert()
   {
     this.alert=false;
   }

}
