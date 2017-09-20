import { Routes, RouterModule } from '@angular/router';
import { StarwarsComponent } from 'app/starwars/starwars.component';
import { NgModule } from '@angular/core';

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
        component: StarwarsComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  