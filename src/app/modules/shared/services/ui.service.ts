import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private _changeHeaderLinkEvent = new Subject<boolean>();
  private loaderSubject = new Subject<boolean>();
  private showMessageSubject = new Subject<string>();

  constructor() { }

  changeHeaderLink(state: boolean) {
    this._changeHeaderLinkEvent.next(state);
  }

  get changeHeaderLinkEvent(): Subject<boolean> {
    return this._changeHeaderLinkEvent;
  }

  toggleLoader(state: boolean) {
    this.loaderSubject.next(state);
  }

  get toggleLoaderEvent(): Subject<boolean> {
    return this.loaderSubject;
  }

  showMessage(message: string) {
    this.showMessageSubject.next(message);
  }

  get showMessagerEvent(): Subject<string> {
    return this.showMessageSubject;
  }
}
