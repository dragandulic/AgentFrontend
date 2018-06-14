import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NewaccommodationComponent } from './components/newaccommodation/newaccommodation.component';
import { MineaccommodationComponent } from './components/mineaccommodation/mineaccommodation.component';
import { PriceplanComponent } from './components/priceplan/priceplan.component';

const routes: Routes = [

  { path: '', component: WelcomepageComponent},
  { path: 'welcomepage', component: WelcomepageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'dashboard', component: DashboardComponent,
     children:[
        { path: 'newaccommodation', component: NewaccommodationComponent},
        { path: 'mineaccommodation', component: MineaccommodationComponent},
        { path: 'priceplan', component: PriceplanComponent}
     ]
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

