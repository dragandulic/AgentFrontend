import { Component, OnInit } from '@angular/core';
import {  AccommodationDTO } from '../../accommodation';
import { Location } from '../../location';
import { AccommodationService } from '../../services/accommodation/accommodation.service';
import { AdditionalServices } from '../../additionalServices';
import { AdditionalserivcesService } from '../../services/additionalservices/additionalserivces.service';
import {LogService} from '../../services/log/log.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Agent } from '../../agent';

@Component({
  selector: 'app-mineaccommodation',
  templateUrl: './mineaccommodation.component.html',
  styleUrls: ['./mineaccommodation.component.scss']
})
export class MineaccommodationComponent implements OnInit {

  accommodations: AccommodationDTO[];
  accommodation1: any={};
  acc: AccommodationDTO;
  loc: Location;
  adds: AdditionalServices;
  accom: AccommodationDTO;
  showEdit: boolean;
  reserveAccommodation: any={};
  additionalSer: string[];
  selectedOptions: any;
  u: Agent;

  constructor(private accommodationService: AccommodationService, private additionalService: AdditionalserivcesService, private loggedin: LogService, private router: Router) { }

  ngOnInit() {
    var ua = this.loggedin.getLocalStore();
    this.u=ua;
    this.showEdit=false;
    this.accommodationService.mineAccommodation(this.u.id)
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

    this.additionalService.getServices()
    .subscribe(data => {this.additionalSer=data;
    

    });
    
    this.showEdit = true;
  }



  onSelectOptionChange(list: any) {
    
    this.selectedOptions = list.selectedOptions.selected.map(item => item.value);

  }

  submitAcc(id){
    this.acc.country=this.loc.country;
    this.acc.city=this.loc.city;
    this.acc.address=this.loc.address;
      
    this.acc.aditionalServices=this.selectedOptions;
    
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

  setreserve(id): void{
    
    this.reserveAccommodation.idAccommodation = id;
    this.reserveAccommodation.reservedFrom = null;
    this.reserveAccommodation.reservedTo = null;

  }


  reserveAcc(): void{

    
    this.accommodationService.reserveAccommodation(this.reserveAccommodation)
    .subscribe(data =>this.reserveAccommodation = data);

  }

}
