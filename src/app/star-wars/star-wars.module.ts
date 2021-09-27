import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavComponent } from './components/nav/nav.component';
import { ListComponent } from './components/list/list.component';
import { PeopleComponent } from './components/people/people.component';
import { StarshipComponent } from './components/starships/starships.component';
import { PlanetComponent } from './components/planets/planets.component';

import { SharedModule } from './../shared/shared.module';
import { StarWarsRoutingModule } from './star-wars-routing.module';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
    NavComponent,
    ListComponent,
    PeopleComponent,
    StarshipComponent,
    PlanetComponent
  ],
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StarWarsModule { }
