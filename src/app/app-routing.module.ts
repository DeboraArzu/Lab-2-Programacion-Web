import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClothesComponent} from './clothes/clothes.component';


const routes:Routes = [
  {path: 'clothes', component: ClothesComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}