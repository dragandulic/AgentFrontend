import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../../services/agent/agent.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  agent1: any={};

  constructor(private agentService: AgentService,private router: Router) { }

  ngOnInit() {
  }


  register(): void {
    
    this.agentService.registerAgent(this.agent1).
    subscribe(agent => { this.agent1 = agent;
      this.router.navigate(['/login']);
      

       });

  }
}
