import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showAnalyzer:boolean = true;
  showMigrator:boolean = false;
  showGenerator:boolean = false;
  public values: any;
  show:boolean = false;
  showAddedRow:boolean = false;
  rowValue:any = null;
  showPopup:boolean = false;
  public URLG = 'http://54.85.113.141:8181/integration-framework-0.0.1-SNAPSHOT/api/v1/deploymentDetails';

  constructor(public http: HttpClient, public spinnerService: NgxSpinnerService, public router: Router) { }

  ngOnInit(): void {
    // this.onFetchAll();
  }

  goToTab(value:string){
      if(value == '2'){
        this.showAnalyzer = false;
        this.showMigrator = true;
        this.showGenerator = false;
      }else if(value == '3'){
        this.showAnalyzer = false;
        this.showMigrator = false;
        this.showGenerator = true;
      }else{
        this.showAnalyzer = true;
        this.showMigrator = false;
        this.showGenerator = false;
      }
  }

  analyze(analyzeData: any){
      console.log(analyzeData);
      // this.spinnerService.show();
    this.spinnerService.show();
    // Send Http request
    this.http.get(this.URLG)
      .subscribe(response => {
        this.values = response;
      });
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
      this.show = true;
    }, 3000);
  }

  generate(generateForm:any){
    console.log(generateForm);
  }

  migrate(migrateForm:any){
    console.log(migrateForm);
  }

  onRowClick(value:string){
    if(value == 'FAILURE'){
      this.showAddedRow = true;
      // alert(value)
      this.showPopup = true;
    }else{
      this.showAddedRow = false;
      this.rowValue = null;
      this.showPopup = false;
    }  
  }
}
