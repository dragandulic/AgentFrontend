import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../../services/accommodation/accommodation.service';
import { AccommodationDTO } from '../../accommodation';

@Component({
  selector: 'app-priceplan',
  templateUrl: './priceplan.component.html',
  styleUrls: ['./priceplan.component.scss']
})
export class PriceplanComponent implements OnInit {

  Accommodations: AccommodationDTO[];

  constructor(private accomodationService: AccommodationService) { }

  ngOnInit() {

    this.accomodationService.mineAccommodation(1)
    .subscribe(data => this.Accommodations = data);
  }

}
