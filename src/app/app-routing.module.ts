import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DAAFComponent } from './daaf/daaf.component';
import { DCGComponent } from './dcg/dcg.component';
import { DDVPComponent } from './ddvp/ddvp.component';
import { DGComponent } from './dg/dg.component';
import { DocumentsComponent } from './documents/documents.component';
import { DREMComponent } from './drem/drem.component';
import { DREVComponent } from './drev/drev.component';
import { DSINComponent } from './dsn/dsin.component';
import { FdgComponent } from './fdg/fdg.component';
import { FDSCComponent } from './fdsc/fdsc.component';
import { FDSINComponent } from './fdsin/fdsin.component';
import { FDVPSComponent } from './fdvps/fdvps.component';
import { GalerieComponent } from './galerie/galerie.component';
import { GuidesComponent } from './guides/guides.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { LogicielsComponent } from './logiciels/logiciels.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';



const routes: Routes = [
  { path: 'home', component: PresentationComponent },
  { path: 'logiciels', component: LogicielsComponent },
  { path: 'guides', component: GuidesComponent },
  {path: 'documents', component: DocumentsComponent},
  {path: 'DG', component: DGComponent},
  {path: 'DSIN', component: DSINComponent},
  {path: 'DAAF', component: DAAFComponent},
  {path: 'DCG', component: DCGComponent},
  {path: 'DDVP', component: DDVPComponent},
  {path: 'DREM', component: DREMComponent},
  {path: 'DREV', component: DREVComponent},
  {path: 'intervention', component: InterventionsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path:'formulaireDG',component:FdgComponent},
  {path:'formulaireDSC',component:FDSCComponent},
  {path:'formulaireDVPS',component:FDVPSComponent},
  {path:'formulaireDSIN',component:FDSINComponent},
  {path: '**', component: GalerieComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
