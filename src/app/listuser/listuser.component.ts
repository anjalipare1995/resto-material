import { restodata } from './../../restodata';
import { AfterViewInit , Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TestService } from '../test.service';
import { Subscription } from 'rxjs';
import { MediaObserver,MediaChange } from '@angular/flex-layout';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit,OnDestroy 
{
deviceXs:any;
mediaSub:any=Subscription;

ELEMENT_DATA :restodata[]=[];
displayedColumns:string[]=['id','name','email','address','date'];
dataSource=new  MatTableDataSource<restodata>(this.ELEMENT_DATA);

@ViewChild(MatPaginator)
paginator!:MatPaginator;

  constructor(private resto:TestService ,private MediaObserver:MediaObserver) { }
   collection:any=[];
  ngOnInit(): void {

    this.resto.getList().subscribe((result:any)=>
    {
      console.log("result",result)
      this.collection=result;

      this.getRestoData();


     this.mediaSub=this.MediaObserver.media$.subscribe((result:MediaChange)=>
     {
       console.log(result.mqAlias);
       this.deviceXs=result.mqAlias === 'xs' ? true :false;

       
     })


    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnDestroy()
  {
    this.mediaSub.unsubscribe();
  }

  public getRestoData()
  {
    let resp = this.resto.getList();
    resp.subscribe(result=>this.dataSource.data=result as restodata[])
  }

}
