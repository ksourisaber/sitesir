import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { GuidesComponent } from './guides/guides.component';
import { LogicielsComponent } from './logiciels/logiciels.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: 'home', component: PresentationComponent },
  { path: 'logiciels', component: LogicielsComponent },
  { path: 'guides', component: GuidesComponent },
  { path: '**', component: GalerieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
