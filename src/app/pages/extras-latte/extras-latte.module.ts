import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExtrasLattePage } from './extras-latte.page';

const routes: Routes = [
  {
    path: '',
    component: ExtrasLattePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExtrasLattePage]
})
export class ExtrasLattePageModule {}
