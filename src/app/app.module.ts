import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsModule } from './dogs/dogs.module';
import { MessagesComponent } from './messages/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
