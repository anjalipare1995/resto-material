import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  //alert:boolean=false

  deviceXs: any;
  mediaSub: any = Subscription;



  msg: string = "";

  constructor(private router: Router, private cookie: CookieService
    , private formBuilder: FormBuilder, private snack: MatSnackBar,
    private MediaObserver: MediaObserver) { this.initLoginForm(); }

  formLogin: any;
  // formlogin:any={
  //   username:'',
  //   password:''
  // }

  initLoginForm() {
    this.formLogin = this.formBuilder.group(
      {
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      }
    )
  }

  login() {
    let data:any=this.formLogin;
    // let data1=JSON.parse("data");
    console.log(this.formLogin.get('username').value);
    

//    console.log(this.formLogin);
    if (("anjali" ===this.formLogin.get('username').value) && ("123" === this.formLogin.get('password').value)) {
      // for local storage token gen
      // localStorage.setItem('token',this.formlogin.username)

      // (token gen in cookie..)
      this.cookie.set('token', this.formLogin.username)
      this.router.navigate(['/home']);
    }
    else {
    
  

      this.snack.open("Invalid Credential",'OK',{
        duration:4000,
        verticalPosition:'top',
        horizontalPosition:'center',
     })

      this.router.navigate(['/login']);


    }


  }


  ngOnInit(): void {
    this.mediaSub = this.MediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;

    })
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

}
