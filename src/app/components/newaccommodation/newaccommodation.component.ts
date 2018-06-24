import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../../services/accommodation/accommodation.service';
import { AdditionalserivcesService } from '../../services/additionalservices/additionalserivces.service';
import {LogService} from '../../services/log/log.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Agent } from '../../agent';

@Component({
  selector: 'app-newaccommodation',
  templateUrl: './newaccommodation.component.html',
  styleUrls: ['./newaccommodation.component.scss']
})
export class NewaccommodationComponent implements OnInit {

  accommodation: any={};
  additionalSer: string[];
  additionalType: string[];
  selectedOptions: any;
  selectedOptionsCategory: any;
  u: Agent;
  category: string[];

  constructor(private accommodationService: AccommodationService,
     private additionalService: AdditionalserivcesService, private loggedin: LogService, private router: Router) { }

  ngOnInit() {

    this.additionalService.getServices()
    .subscribe(data =>{ this.additionalSer = data;
 
    });

    this.accommodationService.getTypes()
    .subscribe(data => this.additionalType = data);
    

    this.additionalService.getCategory()
    .subscribe(data => this.category = data);
  }


  addNewAccommodation(): void{
    console.log(this.accommodation.picture);

    var ua = this.loggedin.getLocalStore();
    this.u=ua;
    this.accommodation.aditionalServices = this.selectedOptions;
    this.accommodation.category = this.selectedOptionsCategory[0];
    this.accommodation.idAgent=this.u.id;
    this.accommodationService.newAccommodation(this.accommodation)
    .subscribe(data => this.accommodation = data);

  }

  selectChangeHandler (event : any){
    this.accommodation.type =  event.target.value;
  }


  onSelectOptionChange(list: any) {
    
    this.selectedOptions = list.selectedOptions.selected.map(item => item.value);

  }

  onSelectOptionChangeCategory(list: any) {
    
    this.selectedOptionsCategory = list.selectedOptions.selected.map(item => item.value);
    console.log(this.selectedOptionsCategory[0]);
  }

}
