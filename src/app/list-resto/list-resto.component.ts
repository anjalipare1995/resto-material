import { MatPaginator } from '@angular/material/paginator';
import { restodata } from './../../restodata';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TestService } from '../test.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit ,OnDestroy {
  
    deviceXs:any;
    mediaSub:any=Subscription;

    ELEMENT_DATA: restodata[] = [];

    displayedColumns:string[] = ['id','name','email','address','date','Actions'];

    dataSource = new MatTableDataSource<restodata>(this.ELEMENT_DATA);
    
    
@ViewChild(MatPaginator)
paginator!:MatPaginator;


  constructor(private resto: TestService, private MediaObserver:MediaObserver) { }
  //all result in collection(all api data)
  //for print on html use table
  // collection:any=[];

  ngOnInit(): void {
    // this.resto.getList();
    //get data from api using subscibe
    //  this.resto.getList().subscribe((result) => {
    //   console.log(result);


    //  this.collection = result;
    //  })

      this.getRestoData();
      

      this.mediaSub=this.MediaObserver.media$.subscribe((result:MediaChange)=>
      
      {
        console.log(result.mqAlias);
        this.deviceXs=result.mqAlias === 'xs' ? true :false;
      })
      
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 

    public getRestoData()
    {
           let resp = this.resto.getList();
           resp.subscribe(result=>this.dataSource.data=result as restodata[])
    }

  ngOnDestroy()
  {
       this.mediaSub.unsubscribe();
  }

  deleteResto(item: any) {
    this.resto.deleteResto(item).subscribe((result) => {
      console.log("result", result)
    })
    this.ngOnInit();

  }




}