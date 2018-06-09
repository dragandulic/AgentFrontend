import { Component, OnInit } from '@angular/core';
import { Accommodation } from '../../accommodation';
import { Location } from '../../location';
import { AccommodationService } from '../../services/accommodation/accommodation.service';
import { AdditionalServices } from '../../additionalServices';

@Component({
  selector: 'app-mineaccommodation',
  templateUrl: './mineaccommodation.component.html',
  styleUrls: ['./mineaccommodation.component.scss']
})
export class MineaccommodationComponent implements OnInit {

  accommodations: Accommodation[];
  accommodation1: any={};
  acc: Accommodation;
  loc: Location;
  adds: AdditionalServices;
  accom: Accommodation;

  constructor(private accommodationService: AccommodationService) { }

  ngOnInit() {
    this.accommodationService.mineAccommodation(1)
    .subscribe(data =>{this.accommodations=data;


    });
  }

  editAcc(id){
    
    this.accommodationService.findAccommodation(id)
    .subscribe(data=> {this.acc=data;
     
      
    });
    this.accommodationService.findLocation(id)
    .subscribe(data=> {this.loc=data;
     

    });
    this.accommodationService.findAS(id)
    .subscribe(data=>{this.adds=data;
      
      
     
    });
  }

  submitAcc(id){
    this.acc.country=this.loc.country;
    this.acc.city=this.loc.city;
    this.acc.address=this.loc.address;
      
    this.acc.wiFi=this.adds.wiFi;
    this.acc.tv=this.adds.tv;
    this.acc.parking=this.adds.parking;
    this.acc.kitchen=this.adds.kitchen;
    this.acc.breakfast=this.adds.breakfast;
    this.acc.halfBoard=this.adds.halfBoard;
    this.acc.fullBoard=this.adds.fullBoard;
    this.acc.bathroom=this.adds.bathroom;
    
    this.accommodationService.editAccommodation(id,this.acc)
    .subscribe(data=> {this.accom=data;

    });
  }

  selectChangeHandler (event : any){
    this.acc.type =  event.target.value;
  }

  deleteAcc(id){
    console.log(id);
  }

}
