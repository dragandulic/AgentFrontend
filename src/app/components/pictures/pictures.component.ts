import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../../services/accommodation/accommodation.service';
import { AccommodationDTO } from '../../accommodation';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  accommodations: AccommodationDTO[];

  constructor(private accService: AccommodationService) { }

  ngOnInit() {

    this.accService.mineAccommodation(1)
    .subscribe(data=>{this.accommodations=data;
    
    });
  }

  onFileSelected(event){
    console.log(event);
  }



}
