import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonApiService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {

  pokemonList: Pokemon[] = [];

  title = 'pokeapp';
  searchTerm: string = '';


  constructor(private pokemonApiService: PokemonApiService, private router: Router) { } // Inyecta Router

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.pokemonApiService.getPokemonList().subscribe(response => {
      const pokemonUrls = response.results.map((pokemon: any) => pokemon.url);
      this.fetchPokemonDetails(pokemonUrls);
    });
  }

  fetchPokemonDetails(urls: string[]): void {
    const observables = urls.map(url => this.pokemonApiService.getPokemonByUrl(url));
    forkJoin(observables).subscribe(pokemonList => {
      this.pokemonList = pokemonList;
    });
  }

  getPokemonId(pokemon: Pokemon): string {
    return pokemon.id.toString();
  }

  viewDetails(id: number): void {
    this.router.navigate(['/pokemon', id]);
  }

  onSearchChanged(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }


}



