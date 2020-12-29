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
import { DetailgalerieComponent } from './detailgalerie/detailgalerie.component';
import { DocumentsComponent } from './documents/documents.component';
import { DGComponent } from './dg/dg.component';
import { DSINComponent } from './dsin/dsin.component';
import { DAAFComponent } from './daaf/daaf.component';
import { DCGComponent } from './dcg/dcg.component';
import { DDVPComponent } from './ddvp/ddvp.component';
import { DREVComponent } from './drev/drev.component';
import { DREMComponent } from './drem/drem.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { VisioconfComponent } from './visioconf/visioconf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    LogicielsComponent,
    GuidesComponent,
    FooterComponent,
    GalerieComponent,
    DetailgalerieComponent,
    DocumentsComponent,
    DGComponent,
    DSINComponent,
    DAAFComponent,
    DCGComponent,
    DDVPComponent,
    DREVComponent,
    DREMComponent,
    InterventionsComponent,
    ContactsComponent,
    VisioconfComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
