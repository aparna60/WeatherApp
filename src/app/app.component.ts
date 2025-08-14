import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { IWeather } from './services/iweather';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  weatherData? : IWeather ;
  city : string = 'Mumbai';
  iconCode : string = '50d'
  errorMessage: string = '';

  service = inject(WeatherService);
  
  ngOnInit(): void {
    this.getWeatherData(this.city);
  }

  getWeatherData(cityName : string)
  {
    this.service.getWeather(cityName).subscribe(
       {
       next: response => this.weatherData =response,    
       error: (error)=> {this.errorMessage = error.message
       console.log(error)}
       }
      )
    
  }

  getCity(ev : Event)
  {
    const item= ev.target as HTMLInputElement
    this.city= item.value.toLocaleLowerCase();
    this.getWeatherData(this.city);

  }
}
