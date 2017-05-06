import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import { SensorComponent } from './sensor/sensor.component';
import { RecipeComponent } from './recipe/recipe.component';
import { TriggerComponent } from './trigger/trigger.component';
import { DeviceComponent } from './device/device.component';

export const appRoutes:Routes = [
    {path:'home', component:HomeComponent},
    {path:'sensor', component:SensorComponent},
    {path:'recipe', component:RecipeComponent},
    {path:'trigger', component:TriggerComponent},
    {path:'device', component:DeviceComponent}
]