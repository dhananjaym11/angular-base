import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  subscription: Subscription;

  constructor(
    private _snackBar: MatSnackBar,
    private uiService: UiService,
  ) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  ngOnInit() {
    this.subscription = this.uiService.showMessagerEvent
      .subscribe((msg: string) => {
        this.openSnackBar(msg);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
