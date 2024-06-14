import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';   //we import the validate service here to be able to use it properly
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-credit-sales-agent',
  templateUrl: './credit-sales-agent.page.html',
  styleUrls: ['./credit-sales-agent.page.scss'],
})
export class CreditSalesAgentPage implements OnInit {

  name!: String;
  amount!: Number;

  constructor(private validateservice: ValidateService,
    private SubscriptionService:SubscriptionService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('credit-sales-agent');
  }

  onCreditSalesAgentSubmit() {
    const creditinfo = {
      name: this.name,
      amount: this.amount
    }
    //Register Subjects
    this.SubscriptionService.creditAgent(creditinfo).subscribe(data => {

      if (data.success) {
        this.router.navigate(['manage-sales-agent']);
        console.log('it works here well');
      } else {
        this.router.navigate(['credit-sales-agent']);

      }
    });
  }

}
