import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
//for getting id
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit ,OnDestroy{
  alert:boolean=false;

   deviceXs:any
   mediaSub:any=Subscription;

  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
   
  })
  constructor(private router: ActivatedRoute, private resto: TestService,private route:Router, private MediaObserver:MediaObserver) { }

  
  ngOnInit(): void {

    //app.routing module we put update/id
    //for getting id on console
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result:any) => {
      this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address']),
        date:new FormControl(Date())
      })
    })

    this.mediaSub=this.MediaObserver.media$.subscribe((result:MediaChange)=>
    {
        console.log(result.mqAlias);
        this.deviceXs=result.mqAlias === 'xs'?true:false;
    })
  }

  ngOnDestroy()
  {
     this.mediaSub.unsubscribe();
  }

  collection()
  {
    console.log(this.editResto.value);
// get data id and data ==
    this.resto.updateResto(this.router.snapshot.params.id ,this.editResto.value)
    .subscribe((result)=>
    {
      this.alert=true;
    
       this.route.navigate(['/list'])
 
    })
  }

  closeAlert()
  {
    this.alert=false;
  }
  }


