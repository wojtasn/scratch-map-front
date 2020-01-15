import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../shared/model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl: string;

  constructor(private http: HttpClient) {
    this.countriesUrl = 'http://localhost:8080/countries';
  }

  public findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl);
  }

  public save(country: Country) {
    return this.http.post<Country>(this.countriesUrl, country);
  }

}
