import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { NgxDadataControlsModule } from 'ngx-dadata-controls';

@NgModule({
  declarations: [
    AppComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDadataControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
