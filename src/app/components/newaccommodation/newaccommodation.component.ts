import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../../services/accommodation/accommodation.service';
import { AdditionalserivcesService } from '../../services/additionalservices/additionalserivces.service';


@Component({
  selector: 'app-newaccommodation',
  templateUrl: './newaccommodation.component.html',
  styleUrls: ['./newaccommodation.component.scss']
})
export class NewaccommodationComponent implements OnInit {

  accommodation: any={};
  additionalSer: string[];
  selectedOptions: any;

  constructor(private accommodationService: AccommodationService,
     private additionalService: AdditionalserivcesService) { }

  ngOnInit() {

    this.additionalService.getServices()
    .subscribe(data =>{ this.additionalSer = data;
 
    });

    
  }


  addNewAccommodation(): void{

    this.accommodation.aditionalServices = this.selectedOptions;
    
    this.accommodationService.newAccommodation(this.accommodation)
    .subscribe(data => this.accommodation = data);

  }

  selectChangeHandler (event : any){
    this.accommodation.type =  event.target.value;
  }


  onSelectOptionChange(list: any) {
    
    this.selectedOptions = list.selectedOptions.selected.map(item => item.value);

  }


}
