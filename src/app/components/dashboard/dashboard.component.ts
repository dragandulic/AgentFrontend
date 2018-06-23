import { Component, OnInit } from '@angular/core';
import {LogService} from '../../services/log/log.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private loggedin: LogService, private router: Router) { }

  ngOnInit() {
  }

  logoutFun(){
    this.router.navigate(['']);
    this.loggedin.delLocalStore();
  }

}
