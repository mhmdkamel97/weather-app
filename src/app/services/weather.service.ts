import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private http:HttpClient) { 
  }



apiKey ='6e61ec7a6e2d7351cc36e12eedbf7bb3';

getWeatherData(city:string){
   return this.http.get('https://api.openweathermap.org/data/2.5/weather?units=metric&appid=6e61ec7a6e2d7351cc36e12eedbf7bb3&q='+city);
}
// getWeatherData(city:string){
//    return this.http.get('https://api.openweathermap.org/data/2.5/weather?units=metric&appid={this.apiKey}&q={city}');
// }


}
