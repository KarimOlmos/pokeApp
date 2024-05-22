import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Error404PageComponent,
    PokemonSearchComponent,
    SidebarComponent

  ],
  imports:[
    FormsModule,
    CommonModule,
    RouterModule

  ],
  exports: [
    Error404PageComponent,
    PokemonSearchComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
