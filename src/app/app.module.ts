import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LogicielsComponent } from './logiciels/logiciels.component';
import { GuidesComponent } from './guides/guides.component';
import { FooterComponent } from './footer/footer.component';
import { GalerieComponent } from './galerie/galerie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    LogicielsComponent,
    GuidesComponent,
    FooterComponent,
    GalerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
