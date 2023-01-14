import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, from, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v2/all');
  }
}
