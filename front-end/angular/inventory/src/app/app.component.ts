import { Component, OnInit } from '@angular/core';
import { WeatherForecastService, WeatherForecast } from 'src/api/inventory.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weatherForecast: WeatherForecast[];

  constructor(private weatherForecastService: WeatherForecastService) {}

  ngOnInit(): void {
    this.weatherForecastService
      .get()
      .subscribe((weatherForecast: WeatherForecast[]) => {
        this.weatherForecast = weatherForecast;
      });
  }
}
