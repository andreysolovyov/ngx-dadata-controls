import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Locations } from './models/locations';
import { Observable } from 'rxjs';
import { DadataSuggestionsResponse } from './models/dadata-suggestions-response';

@Injectable({
  providedIn: 'root'
})
export class DadataSuggestionsService {

  constructor(private httpClient: HttpClient) { }

  getAddressSuggestions(
    query: string, apiKey: string, count: number = 10,
    locations: Locations[] = null): Observable<DadataSuggestionsResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Token ' + apiKey,
      })
    };
    const body = Object.assign({ query, count, locations });
    return this.httpClient.post<DadataSuggestionsResponse>('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    body, httpOptions);
  }
}
