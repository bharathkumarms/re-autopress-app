import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import {appRoutes} from './routes';

import { HomeComponent } from './home/home.component';
import { SensorComponent } from './sensor/sensor.component';
import { RecipeComponent } from './recipe/recipe.component';
import { TriggerComponent } from './trigger/trigger.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SensorComponent,
    RecipeComponent,
    TriggerComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
