import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AgentService } from '../../services/agent/agent.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public form: FormGroup;
  public userid: any;
  constructor(private _userService:AgentService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {

    this.form = new FormGroup({
      comment: new FormControl('',[Validators.required]),
  })

    this.route.paramMap.switchMap((params: ParamMap) => {
      let userid = params.get('id');
     return userid;
  })
  .subscribe(res => this.userid = res);



   

  }

  sendMessage(){
    let reviewfield = this.form.value;
    console.log(reviewfield.comment);
    this._userService.sendMessage(this.userid,reviewfield.comment).subscribe((data)=>{alert(data.message)});
    
  }
}
