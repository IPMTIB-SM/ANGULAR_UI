import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  showAnalyzer:boolean = true;
  showMigrator:boolean = false;
  showGenerator:boolean = false;
  public values: any;
  showAnalyzerData:boolean = false;
  showAddedRow:boolean = false;
  rowValue:any = null;
  showPopup:boolean = false;
  analyzerPathLocation:string ="";
  analyzerCompatibility:string ="";
  showIndex:number = 0;

  public URLG = 'http://54.85.113.141:8181/integration-framework-0.0.1-SNAPSHOT/api/v1/deploymentDetails';

  constructor(public http: HttpClient, public spinnerService: NgxSpinnerService) { }

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
    this.spinnerService.show();
    // Send Http request
    this.http.get(this.URLG)
      .subscribe(response => {
        this.values = response;
        this.analyzerPathLocation = analyzeData.location;
        this.analyzerCompatibility = analyzeData.compatibility;
      });
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinnerService.hide();
      this.showAnalyzerData = true;
    }, 2000);
  }

  generate(generateForm:any){
    console.log(generateForm);
  }

  migrate(migrateForm:any){
    console.log(migrateForm);
  }

  onRowClick(rowIndex:any,value:string){
    if(value == 'FAILURE'){
      this.showAddedRow = true;
      // alert("Solution- Kindly try again")
      this.showIndex = rowIndex;
      this.showPopup = true;
    }else{
      this.showAddedRow = false;
      this.rowValue = null;
      this.showPopup = false;
      this.showIndex = 0;
    }  
  }
  
}
