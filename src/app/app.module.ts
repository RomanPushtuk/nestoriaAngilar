import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule }   from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from  '@angular/forms';

import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './common/reuse-strategy'

import { NestoriaService } from './common/nestoria.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './nestoria/form/form.component';
import { SavedComponent } from './nestoria/saved/saved.component';
import { ModalComponent } from './nestoria/modal/modal.component';
import { ItemsComponent } from './nestoria/items/items.component';
import { PaginationComponent } from './nestoria/pagination/pagination.component';
import { NestoriaComponent } from './nestoria/nestoria.component';

const routes:Route[] = [
  { path: "", component: NestoriaComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'saved', component: SavedComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SavedComponent,
    ModalComponent,
    ItemsComponent,
    PaginationComponent,
    NestoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    NestoriaService,
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
