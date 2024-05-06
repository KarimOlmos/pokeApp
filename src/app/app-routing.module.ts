import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module')
    .then( m => m.AuthRoutingModule ),
  },

  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module')
    .then( m => m.PokemonModule ),
  },

  {
    path: '4O4',
    component: Error404PageComponent,
  },

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
