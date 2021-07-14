import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  mediaSub:any=Subscription;
   deviceXs:any;

  constructor(private MediaObserver:MediaObserver)
  {}
  ngOnInit()
  {
      this.mediaSub=this.MediaObserver.media$.subscribe((result:MediaChange)=>
      {
        console.log(result.mqAlias);

        this.deviceXs=result.mqAlias === 'xs' ? true :false;
      })
  }
  ngOnDestroy()
   {
     this.mediaSub.unsubscribe();
   }
    
     
}
