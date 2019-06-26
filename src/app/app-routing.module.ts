import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'mocamedes', loadChildren: './pages/mocamedes/mocamedes.module#MocamedesPageModule' },
  { path: 'mocamedes', loadChildren: './pages/mocamedes/mocamedes.module#MocamedesPageModule' },
  { path: 'tombwa', loadChildren: './pages/tombwa/tombwa.module#TombwaPageModule' },
  { path: 'bibala', loadChildren: './pages/bibala/bibala.module#BibalaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
