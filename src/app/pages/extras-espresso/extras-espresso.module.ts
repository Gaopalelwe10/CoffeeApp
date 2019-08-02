import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExtrasEspressoPage } from './extras-espresso.page';

const routes: Routes = [
  {
    path: '',
    component: ExtrasEspressoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExtrasEspressoPage]
})
export class ExtrasEspressoPageModule {}
