import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  agent1: any={};

  constructor(private agentService: AgentService, private router: Router) { }

  ngOnInit() {
  }

  login(): void{

    this.agentService.loginAgent(this.agent1)
    .subscribe(agent => {this.agent1=agent;
      this.router.navigate(['/dashboard']);

    });



  }
}
