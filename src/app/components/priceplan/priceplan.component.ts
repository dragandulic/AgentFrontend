import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../../services/accommodation/accommodation.service';
import { AccommodationDTO } from '../../accommodation';
import { RoomService } from '../../services/room/room.service';

@Component({
  selector: 'app-priceplan',
  templateUrl: './priceplan.component.html',
  styleUrls: ['./priceplan.component.scss']
})
export class PriceplanComponent implements OnInit {

  Accommodations: AccommodationDTO[];
  typesOfRoom: string[];

  constructor(private accomodationService: AccommodationService, private roomservice: RoomService) { }

  ngOnInit() {

    this.accomodationService.mineAccommodation(1)
    .subscribe(data =>{ this.Accommodations = data
      console.log(this.Accommodations[0]);
    });
  }

  
  getRoomsOfAccommodation(id): void{

    this.roomservice.getRoomsOfAcc(id)
    .subscribe(data => {this.typesOfRoom = data
      
      console.log(this.typesOfRoom[0]);
    
    });

  }

}
