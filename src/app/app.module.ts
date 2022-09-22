import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideBarMenuComponent } from './core/components/side-bar-menu/side-bar-menu.component';
import { RouterModule } from '@angular/router';
import { FormListClientComponent } from './core/components/form-list-client/form-list-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { enviroment} from './core/configuration/enviroment';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnalisysClientLisComponent } from './core/components/analisys-client-lis/analisys-client-lis.component'
@NgModule({
  declarations: [
    AppComponent,
    FormListClientComponent,
    SideBarMenuComponent,
    FormListClientComponent,
    AnalisysClientLisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFirestoreModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
