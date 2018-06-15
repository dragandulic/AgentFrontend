import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../../services/accommodation/accommodation.service';
import { AccommodationDTO } from '../../accommodation';
import { RoomService } from '../../services/room/room.service';
import { priceplanedto } from '../../priceplandto';

@Component({
  selector: 'app-priceplan',
  templateUrl: './priceplan.component.html',
  styleUrls: ['./priceplan.component.scss']
})
export class PriceplanComponent implements OnInit {

  Accommodations: AccommodationDTO[];
  typesOfRoom: string[];
  pricaPlan: any={};
  pricePlann: priceplanedto;
  constructor(private accomodationService: AccommodationService, private roomservice: RoomService) { }

  ngOnInit() {

    this.accomodationService.mineAccommodation(1)
    .subscribe(data =>{ this.Accommodations = data
      
    });
  }

  
  getRoomsOfAccommodation(id): void{

    this.pricaPlan.idAccommodation = id;
    this.roomservice.getRoomsOfAcc(id)
    .subscribe(data => {this.typesOfRoom = data
      
    });

  }

  selectChangeHandler (event : any){
    this.pricaPlan.roomType =  event.target.value;
   
  }

  addPricePlan(): void{

    this.accomodationService.addPricePlaneForAcc(this.pricaPlan)
    .subscribe(data => this.pricePlann = data);

  }

}
