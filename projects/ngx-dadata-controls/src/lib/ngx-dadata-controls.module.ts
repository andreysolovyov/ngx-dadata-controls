import { NgModule } from '@angular/core';
import { NgxDadataCtrlSuggestionsComponent } from './suggestions/suggestions.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [NgxDadataCtrlSuggestionsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgxDadataCtrlSuggestionsComponent]
})
export class NgxDadataControlsModule { }
