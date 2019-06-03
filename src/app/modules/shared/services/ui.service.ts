import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private _changeHeaderLinkEvent = new Subject<boolean>();
  private loaderSubject = new Subject<boolean>();

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
}
