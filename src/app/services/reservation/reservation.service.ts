import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) { }

  getreservationOfAgent(id): Observable<any>{

    return this.http.get<any>('http://localhost:8086/reservations/getReservationOfAgent/' + id);

  }

  acceptreservation(id): Observable<any>{

    return this.http.get<any>('http://localhost:8086/reservations/acceptreservation/' + id);

  }

  deletereservation(id): Observable<any>{

    return this.http.get<any>('http://localhost:8086/reservations/deletereservation/' + id);

  }

}
