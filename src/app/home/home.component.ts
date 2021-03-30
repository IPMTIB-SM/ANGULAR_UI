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
  public expandedIndex:number;

  public URLG = 'http://54.85.113.141:8181/integration-framework-0.0.1-SNAPSHOT/api/v1/deploymentDetails';

  constructor(public http: HttpClient, public spinnerService: NgxSpinnerService) { this.expandedIndex=-1; }

  ngOnInit(): void {
    // this.onFetchAll();
  }
  expandRow(index: number,value:string): void {
    if(value == 'FAILURE'){
       this.expandedIndex = index === this.expandedIndex ? -1 : index;
    }
  }
  goToTab(value:string){
      if(value == '2'){
        this.showAnalyzer = false;
        this.showMigrator = true;
        this.showGenerator = false;
        this.showAnalyzerData = false;
      }else if(value == '3'){
        this.showAnalyzer = false;
        this.showMigrator = false;
        this.showGenerator = true;
        this.showAnalyzerData = false;
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
    // this.http.get(this.URLG)
    //   .subscribe(response => {
    //     this.values = response;
    this.values=[
      {"id":"123356","projectId":"1234","interfaceName":"New Test Updating ","deploymentStatus":"SUCCESS","deploymentMode":"Docker2222","buildNumber":"1.0","instanceName":"Test2222","costCenter":"Test2222","memoryRequest":"Test2222","cpuRequest":"Test2222","memoryLimit":"Test2222","cpuLimit":"Test2222","healthCheckUri":"Test2222","techOwner":"Test2222"},
      {"id":"5fe0d5d548ec052fbeaabf53","projectId":null,"interfaceName":"RESTDEMOAPP45","deploymentStatus":"FAILURE","deploymentMode":null,"buildNumber":"3","instanceName":null,"costCenter":null,"memoryRequest":null,"cpuRequest":null,"memoryLimit":null,"cpuLimit":null,"healthCheckUri":null,"techOwner":null},
      {"id":"5fe1c1f948ec052fbeab5336","projectId":null,"interfaceName":"TEST1222","deploymentStatus":"SUCCESS","deploymentMode":null,"buildNumber":"4","instanceName":null,"costCenter":null,"memoryRequest":null,"cpuRequest":null,"memoryLimit":null,"cpuLimit":null,"healthCheckUri":null,"techOwner":null},
      {"id":"5fe37fcd11eef6d1877e10fa","projectId":"Inteface New01","interfaceName":"Cts.New.Project","deploymentStatus":"SUCCESS","deploymentMode":"Docker","buildNumber":"1.0","instanceName":"instanceName","costCenter":"costCenter","memoryRequest":"memoryRequest","cpuRequest":"cpuRequest","memoryLimit":"memoryLimit","cpuLimit":"cpuLimit","healthCheckUri":"healthCheckUri","techOwner":"techOwner"},
      {"id":"5fe37fd711eef6d1877e10fb","projectId":"Inteface New01","interfaceName":"Cts.New.Project","deploymentStatus":"FAILURE","deploymentMode":"Docker","buildNumber":"1.0","instanceName":"instanceName","costCenter":"costCenter","memoryRequest":"memoryRequest","cpuRequest":"cpuRequest","memoryLimit":"memoryLimit","cpuLimit":"cpuLimit","healthCheckUri":"healthCheckUri","techOwner":"techOwner"}
      ];
        this.analyzerPathLocation = analyzeData.location;
        this.analyzerCompatibility = analyzeData.compatibility;
        this.showAnalyzerData = true;
        setTimeout(() => {
          this.spinnerService.hide();
          }, 2000)
      // });
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
