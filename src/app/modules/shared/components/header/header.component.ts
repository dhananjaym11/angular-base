import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  homeClicked = false;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.subscription = this.uiService.changeHeaderLinkEvent
      .subscribe((state: boolean) => {
        this.homeClicked = state;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
