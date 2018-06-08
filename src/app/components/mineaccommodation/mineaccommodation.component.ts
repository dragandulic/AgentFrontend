import { Component, OnInit } from '@angular/core';
import { Accommodation } from '../../accommodation';
import { AccommodationService } from '../../services/accommodation/accommodation.service';

@Component({
  selector: 'app-mineaccommodation',
  templateUrl: './mineaccommodation.component.html',
  styleUrls: ['./mineaccommodation.component.scss']
})
export class MineaccommodationComponent implements OnInit {

  accommodations: Accommodation[];
  accommodation1: any={};
  acc: Accommodation;

  constructor(private accommodationService: AccommodationService) { }

  ngOnInit() {
    this.accommodationService.mineAccommodation(1)
    .subscribe(data =>{this.accommodations=data;


    });
  }

  editAcc(id){
    console.log(id);
    this.accommodationService.findAccommodation(id)
    .subscribe(data=> {this.acc=data;
      console.log(this.acc.id);
      
    });
  }

  selectChangeHandler (event : any){
    this.acc.type =  event.target.value;
  }

  deleteAcc(id){
    console.log(id);
  }

}
