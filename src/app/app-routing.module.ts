import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
import { ButtonTestComponent } from './button-test/button-test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'star-wars',
    pathMatch: 'full'
  },
  {
    path: 'buttons',
    component: ButtonTestComponent
  },
  {
    path: 'star-wars',
    loadChildren: () => import('./star-wars/star-wars.module').then(m => m.StarWarsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
