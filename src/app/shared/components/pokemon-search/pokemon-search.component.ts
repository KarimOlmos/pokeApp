import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonApiService } from '../../../pokemon/services/pokemon.service';// Reemplaza '...' con la ruta correcta al servicio
import { Pokemon } from '../../../pokemon/interfaces/pokemon.interface';// Reemplaza '...' con la ruta correcta a la interfaz de Pokemon

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
})
export class PokemonSearchComponent {
  searchTerm: string = '';

  constructor(private router: Router, private pokemonApiService: PokemonApiService) {}

  navigateToPokemon(): void {
    if (this.searchTerm.trim() !== '') {
      const pokemonName = this.searchTerm.toLowerCase();
      this.pokemonApiService.getPokemonList().subscribe((pokemonList: any) => {
        const foundPokemon = pokemonList.results.find((pokemon: Pokemon) => pokemon.name.toLowerCase() === pokemonName);
        if (foundPokemon) {
          const pokemonId = this.extractPokemonId(foundPokemon.url);
          if (pokemonId) {
            this.router.navigate(['/pokemon', pokemonId]);
          } else {
            console.log('Pokemon ID not found');
          }
        } else {
          console.log('Pokemon not found');
        }
      });
    }
  }

  extractPokemonId(pokemonUrl: string): number | undefined {
    const idMatches = pokemonUrl.match(/\/(\d+)\/$/);
    if (idMatches && idMatches.length >= 2) {
      return parseInt(idMatches[1]);
    } else {
      return undefined;
    }
  }
}



