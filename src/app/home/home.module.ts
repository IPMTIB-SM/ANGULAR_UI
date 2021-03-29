import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SortTablePipe } from '../sort-table.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, SortTablePipe],
  imports: [
    CommonModule,FormsModule,HttpClientModule,MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
