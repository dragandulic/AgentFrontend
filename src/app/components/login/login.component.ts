import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent/agent.service';
import { Router } from '@angular/router';
import {LogService} from '../../services/log/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  agent1: any={};

  constructor(private agentService: AgentService, private router: Router, private _logService:LogService) { }

  ngOnInit() {
  }

  login(): void{

    this.agentService.loginAgent(this.agent1)
    .subscribe(agent => {this.agent1=agent;
      this._logService.setLocalStore(this.agent1);
      this.router.navigate(['/dashboard']);

    });



  }
}
