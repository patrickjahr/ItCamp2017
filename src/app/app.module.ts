import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StarwarsService } from 'services/starwars.service';
import { HttpModule } from '@angular/http';
import { TextToVisabilityPipe } from './text-to-visability.pipe';
import { StarwarsComponent } from './starwars/starwars.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListItemComponent } from 'app/list-item/list-item.component';
import { StarwarsDetailComponent } from 'app/starwars/starwars-detail/starwars-detail.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { FormsModule } from '@angular/forms';
import {PokemonService} from "../services/pokemon.service";
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'app/auth.guard';
import { LoginService } from 'services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListItemComponent,
    StarwarsDetailComponent,
    TextToVisabilityPipe,
    StarwarsComponent,
    PokemonComponent,
    PokemonDetailComponent,
    MobileNavComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StarwarsService, PokemonService, AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
