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
    this.uiService.changeHeaderLink(true);
    this.uiService.toggleLoader(true);
  }

}
