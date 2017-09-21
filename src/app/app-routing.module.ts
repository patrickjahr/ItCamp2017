import { Routes, RouterModule } from '@angular/router';
import { StarwarsComponent } from 'app/starwars/starwars.component';
import { NgModule } from '@angular/core';
import {PokemonComponent} from './pokemon/pokemon.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuard } from 'app/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
        path: 'starwars',
        component: StarwarsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pokemon',
        component: PokemonComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
