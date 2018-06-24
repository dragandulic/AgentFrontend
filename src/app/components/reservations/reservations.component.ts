import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation/reservation.service';
import { Reservation } from '../../reservation';
import { LogService } from '../../services/log/log.service';
import { Agent } from '../../agent';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];
  reservation: Reservation;
  u: Agent;
  constructor(private reservationService: ReservationService, private logenid: LogService) { }

  ngOnInit() {
  
   // var ua = this.logenid.getLocalStore();
    //this.u = ua;

    this.reservationService.getreservationOfAgent(1)
    .subscribe(data =>{ this.reservations = data;
    });

  }

  AcceptRegistration(id): void{

    this.reservationService.acceptreservation(id)
    .subscribe(data=> {this.reservation = data});

  }

  DeleteRegistration(id): void{

    this.reservationService.deletereservation(id)
    .subscribe(data=> {this.reservation = data});

  }

}
