import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  show = false;
  subscription: Subscription;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.subscription = this.uiService.toggleLoaderEvent
      .subscribe((state: boolean) => {
        this.show = state;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
