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
import { Accommodation } from './accommodation';
import { AccommodationService } from './services/accommodation/accommodation.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    NewaccommodationComponent,
    MineaccommodationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AgentService,AccommodationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
