import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver,MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,  OnDestroy
{
  
mediaSub:any=Subscription;
deviceXs:any;
  constructor(private MediaObserver:MediaObserver)
   { }

  ngOnInit(): void 
  {
    this.mediaSub=this.MediaObserver.media$.subscribe((result:MediaChange)=>
    {
      console.log(result.mqAlias);
      this.deviceXs=result.mqAlias === 'xs' ? true:false;
    })
  }

  ngOnDestroy()
  {
   this.mediaSub.unsubscribe();
  }

}
