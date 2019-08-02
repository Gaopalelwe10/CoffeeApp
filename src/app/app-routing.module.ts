import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'extras-cappuccino', loadChildren: './pages/extras-cappuccino/extras-cappuccino.module#ExtrasCappuccinoPageModule' },
  { path: 'extras-espresso', loadChildren: './pages/extras-espresso/extras-espresso.module#ExtrasEspressoPageModule' },
  { path: 'extras-latte', loadChildren: './pages/extras-latte/extras-latte.module#ExtrasLattePageModule' },
  { path: 'extraslongb', loadChildren: './pages/extraslongb/extraslongb.module#ExtraslongbPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
