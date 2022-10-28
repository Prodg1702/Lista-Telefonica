import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-de-contatos',
    loadChildren: () => import('./contatos/lista-de-contatos/lista-de-contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'contatos/:id',
    loadChildren: () => import('./contatos/contatos.module').then( m => m.DetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
