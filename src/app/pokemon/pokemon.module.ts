import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component'; // Importa el componente PokemonDetailComponent
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    ToggleCasePipe,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,

    SharedModule
  ]
})
export class PokemonModule { }
