import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms'
import { routingComponents, AppRoutingModule } from "./app.routing";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { UserSharingService } from './user.sharingservice';
import { UserHttpService } from './user.httpservice';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule , FormsModule, AppRoutingModule, HttpModule],
  /*exports:      [ routingComponents],*/
  declarations: [ routingComponents],
  providers:    [ UserSharingService, UserHttpService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }