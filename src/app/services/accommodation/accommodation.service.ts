import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Accommodation } from '../../accommodation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccommodationService {

  constructor(private http: HttpClient) { }


  newAccommodation(acc : Accommodation): Observable<any>{

    return this.http.post<any>('http://localhost:8086/accommodation/addAccommodation', acc, httpOptions);

  }
}
