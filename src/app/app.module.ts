import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListItemComponent } from './list-item/list-item.component';
import { StarwarsService } from 'services/starwars.service';
import { HttpModule } from '@angular/http';
import { StarwarsDetailComponent } from './starwars-detail/starwars-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListItemComponent,
    StarwarsDetailComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
