import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  @Input() deviceXs:any;
  constructor(private route:Router,private cookie:CookieService) { }

  ngOnInit(): void {
  }

  logOut()
  {
      this.cookie.deleteAll();
      //localStorage.clear();
      this.route.navigate(['/header'])
  }

}
