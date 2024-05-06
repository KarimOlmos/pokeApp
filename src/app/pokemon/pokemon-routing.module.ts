import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'list', component: PokemonListComponent },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  { path: 'pokemon/:id', component: PokemonDetailComponent },

  {
    path: '**',
    redirectTo: '4O4',
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }

