import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AgentService } from './services/agent/agent.service';
import { NewaccommodationComponent } from './components/newaccommodation/newaccommodation.component';
import { MineaccommodationComponent } from './components/mineaccommodation/mineaccommodation.component';
import { AccommodationDTO } from './accommodation';
import { AccommodationService } from './services/accommodation/accommodation.service';

import {MatListModule} from '@angular/material/list';
import { AdditionalserivcesService } from './services/additionalservices/additionalserivces.service';
import { PriceplanComponent } from './components/priceplan/priceplan.component';
import { RoomService } from './services/room/room.service';
import { PicturesComponent } from './components/pictures/pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    NewaccommodationComponent,
    MineaccommodationComponent,
    PriceplanComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatListModule
  ],
  providers: [AgentService,AccommodationService,AdditionalserivcesService,RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
