import { Component, OnInit } from '@angular/core';

import { UiService } from '../../../../modules/shared/services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private uiService: UiService) { }

  ngOnInit() {
  }

  changeHeaderLink() {
    this.uiService.toggleLoader(true);
    setTimeout(() => {
      this.uiService.toggleLoader(false);
      this.uiService.changeHeaderLink(true);
      this.uiService.showMessage('Header link updated');
    }, 3000);
  }
}