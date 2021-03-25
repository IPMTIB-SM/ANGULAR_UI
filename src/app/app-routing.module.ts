import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  // { path: 'analyzer',  loadChildren: () => import('./analyzer/analyzer.module').then( m => m.AnalyzerModule)},
  // { path: 'migrator',  loadChildren: () => import('./migrator/migrator.module').then( m => m.MigratorModule)},
  // { path: 'generator',  loadChildren: () => import('./generator/generator.module').then( m => m.GeneratorModule)}
  { path: 'login',  loadChildren: () => import('./login/login.module').then( m => m.LoginModule)},
  { path: 'home',  loadChildren: () => import('./home/home.module').then( m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
