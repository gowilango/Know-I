import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// angular material 
import { MaterialModule } from './material/material.module';
// bootstrap for angular (for some components)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// routing module 
import { AppRoutingModule } from './app-routing.module';
// angular flex
import { FlexLayoutModule } from "@angular/flex-layout";
// components 
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule.forRoot(),
    FlexLayoutModule
  ],
  declarations: [
    // newly created components should come here
    AppComponent,
    NavComponent,
    ContentComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
