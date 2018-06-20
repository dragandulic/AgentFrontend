import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AccommodationDTO } from '../../accommodation';
import { priceplanedto } from '../../priceplandto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccommodationService {

  constructor(private http: HttpClient) { }


  newAccommodation(acc : AccommodationDTO): Observable<any>{

    return this.http.post<any>('http://localhost:8086/accommodation/addAccommodation', acc, httpOptions);

  }

  mineAccommodation(id): Observable<any>{

    return this.http.get<any>('http://localhost:8086/accommodation/getAllAccommodation/'+id);

  }

  findAccommodation(id): Observable<any>{

    return this.http.get<any>('http://localhost:8086/accommodation/getAccommodation/'+id);

  }

  findLocation(id): Observable<any>{

    return this.http.get<any>('http://localhost:8086/location/'+id);

  }

  findAS(id): Observable<any>{

    return this.http.get<any>('http://localhost:8086/additionalServices/'+id);

  }

  editAccommodation(id,accommodation: AccommodationDTO): Observable<any>{

    return this.http.put<any>('http://localhost:8086/accommodation/editAccommodation/'+id, accommodation,httpOptions);

  }


  reserveAccommodation(accommodationDTO: AccommodationDTO): Observable<any>{

    return this.http.put<any>('http://localhost:8086/accommodation/reserveaccommodation',accommodationDTO,httpOptions);

  }

  addPricePlaneForAcc(priceplandto: priceplanedto): Observable<any>{

    return this.http.post<any>('http://localhost:8086/priceplan/addpriceplan', priceplandto,httpOptions );

  }


  getTypes(): Observable<any>{

    return this.http.get<any>('http://localhost:8086/accommodation/getacctypes');

  }

}
