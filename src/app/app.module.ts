import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NomeComponent } from './nome/nome.component';
import { NomeService } from './services/nome.service';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [NomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
