import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLoading:boolean = false;
  constructor(private router: Router, public spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  doLogin(loginformData: any){
    console.log(loginformData);
    this.showLoading = true;
 
    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.showLoading = false;
      this.router.navigate(['/home'])
    }, 3000);
  }

}
