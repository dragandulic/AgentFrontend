import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewaccommodationComponent } from './components/newaccommodation/newaccommodation.component';
import { MineaccommodationComponent } from './components/mineaccommodation/mineaccommodation.component';

const routes: Routes = [

  { path: '', component: WelcomepageComponent},
  { path: 'dashboard', component: DashboardComponent,
     children:[
        { path: 'newaccommodation', component: NewaccommodationComponent},
        { path: 'mineaccommodation', component: MineaccommodationComponent}
     ]
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

