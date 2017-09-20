import { Routes, RouterModule } from '@angular/router';
import { StarwarsComponent } from 'app/starwars/starwars.component';
import { NgModule } from '@angular/core';
import {PokemonComponent} from './pokemon/pokemon.component';

const routes: Routes = [
    {
        path: '',
        redirectTo : 'starwars',
        pathMatch : 'full'
    },
    {
        path: 'starwars',
        component: StarwarsComponent
    },
    {
        path: 'pokemon',
        component: PokemonComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
