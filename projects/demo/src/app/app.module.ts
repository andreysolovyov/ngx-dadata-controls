import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { NgxDadataControlsModule } from 'ngx-dadata-controls';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,
    NgxDadataControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
