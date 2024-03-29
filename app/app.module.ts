import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { routing } from './app.router';
import { SpotifyService } from './services/spotify.service';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent ],
  providers: [ SpotifyService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
