import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes:Routes = [
	{path:'', component:SearchComponent},
	{path:'about', component:AboutComponent},
	{path:'artist/:id', component:ArtistComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);