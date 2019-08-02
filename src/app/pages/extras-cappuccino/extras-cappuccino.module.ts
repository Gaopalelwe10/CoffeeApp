import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExtrasCappuccinoPage } from './extras-cappuccino.page';

const routes: Routes = [
  {
    path: '',
    component: ExtrasCappuccinoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExtrasCappuccinoPage]
})
export class ExtrasCappuccinoPageModule {}
