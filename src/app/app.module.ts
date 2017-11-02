import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalService } from './services/global.service';
import { ObjetosService } from './services/objetos.service';
import {
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTabsModule,
  MatGridListModule
} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { routing, appRoutingProviders} from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AgregarObjetoComponent } from './components/agregar-objeto/agregar-objeto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ListadoComponent,
    AgregarObjetoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatGridListModule,
    routing
  ],
  providers: [
    GlobalService,
    ObjetosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
