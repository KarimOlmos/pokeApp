import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonApiService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-detail.component.html',
  styles: []
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonApiService: PokemonApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const pokemonId = params['id'];
      this.getPokemonDetails(pokemonId);
    });
  }

  getPokemonDetails(id: number): void {
    this.pokemonApiService.getPokemonById(id).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }
}

