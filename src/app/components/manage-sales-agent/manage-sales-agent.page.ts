import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { SubscriptionService} from '../../services/subscription.service';

@Component({
  selector: 'app-manage-sales-agent',
  templateUrl: './manage-sales-agent.page.html',
  styleUrls: ['./manage-sales-agent.page.scss'],
})
export class ManageSalesAgentPage implements OnInit {
  username!: String;
  serialNumberHolder!: String;

  constructor(
              private validateservice: ValidateService,
              private subscription: SubscriptionService,
              private route: ActivatedRoute,
              private router: Router
            ) { }

  ngOnInit() {
    console.log('manage-sales')
  }

  createSalesAgent(){
    this.router.navigate(['/create-sales-agent'], {relativeTo:this.route})
  }

  modifySalesAgent(){
    this.router.navigate(['/modify-sales-agent'], {relativeTo:this.route})
  }

  creditSalesAgent(){
    this.router.navigate(['/credit-sales-agent'], {relativeTo:this.route})
  }

}
