import { Component, OnInit } from '@angular/core';
import { DadataConfig } from 'ngx-dadata-controls';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  configAddress: DadataConfig = {
    apiKey: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
