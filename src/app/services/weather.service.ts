import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IWeather } from './iweather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private http = inject(HttpClient);

  constructor() {} 

  // getWeather(city? : string) : Observable<IWeather> {
  //   return this.http.get<IWeather>('https://weather-api99.p.rapidapi.com/weather?city='+ city, {
  //     headers: {
  //       'x-rapidapi-key': '0c669dbd7emsh58ed95c67fcbc8fp1f3448jsn1248e3c61bdd',
  //       'x-rapidapi-host': 'weather-api99.p.rapidapi.com',
  //     },
  //   }).pipe(
  //     catchError((err)=>{return throwError(()=> err)})
  //   );
  // }


   getWeather(city? : string) : Observable<IWeather> {
    return this.http.get<IWeather>('https://localhost:7061/api/Weather/?city='+ city, {
      headers: {
        'x-rapidapi-key': '0c669dbd7emsh58ed95c67fcbc8fp1f3448jsn1248e3c61bdd',
        'x-rapidapi-host': 'weather-api99.p.rapidapi.com',
      },
    }).pipe(
      catchError((err)=>{return throwError(()=> err)})
    );
  }
}
