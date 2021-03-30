import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  doLogin(loginformData: any){
    console.log(loginformData);
    this.spinnerService.show();

    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.spinnerService.hide();

      this.router.navigate(['/home'])
    }, 3000);
  }

}
