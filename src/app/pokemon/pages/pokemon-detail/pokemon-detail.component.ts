import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonApiService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && !isNaN(Number(id))) {
      const pokemonId = parseInt(id, 10);
      this.getPokemonById(pokemonId); // Llama al método getPokemonById para obtener los detalles del Pokémon por su ID
    } else {
      this.router.navigate(['/404']); // Navega a la página 404 si el ID no es un número válido
    }
  }

  getPokemonById(id: number): void {
    this.pokemonApiService.getPokemonById(id).subscribe(
      (pokemon) => {
        if (pokemon) {
          this.pokemon = pokemon;
        } else {
          this.router.navigate(['/404']); // Navega a la página 404 si el Pokémon no existe
        }
      },
      () => {
        this.router.navigate(['/404']); // Navega a la página 404 si hay algún error en la solicitud
      }
    );
  }
}

