import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    Error404PageComponent,
    PokemonSearchComponent
  ],
  imports:[
    FormsModule,
    CommonModule

  ],
  exports: [
    Error404PageComponent,
    PokemonSearchComponent
  ]
})
export class SharedModule { }
