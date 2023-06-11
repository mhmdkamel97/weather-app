import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [WeatherService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
