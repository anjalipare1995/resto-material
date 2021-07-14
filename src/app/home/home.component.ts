import { Component, OnInit,OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  mediaSub:any=Subscription;
  deviceXs:any;
  constructor(private MediaObserver:MediaObserver) 
  { }

  ngOnInit() {
    
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
