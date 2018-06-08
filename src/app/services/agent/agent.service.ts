import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Agent } from 'http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AgentService {

  constructor(private http: HttpClient) { }

  loginAgent(agent: Agent): Observable<any>{

    return this.http.post<any>('http://localhost:8086/agent/login', agent, httpOptions);

  }

  registerAgent (agent: Agent): Observable<any>{

    return this.http.post<any>('http://localhost:8086/agent/registration', agent, httpOptions);

  }

}
