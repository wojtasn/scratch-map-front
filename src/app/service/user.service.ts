import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Country } from '../shared/model/country';
import { User } from '../shared/model/user';
import { CountryService } from './country-service.service';
import { Journey } from '../shared/model/journey';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient, private countryService: CountryService) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findById(userId: number): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + userId);
  }

  public findAll(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.usersUrl);
  }

  public showUsersCountries(userId: number): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.usersUrl + "/" + userId);
  }

  public addNewJourney(userId: number, journey: Journey): Observable<Journey> {
    return this.http.put<Journey>(this.usersUrl + "/" + userId, journey);
  }

}
