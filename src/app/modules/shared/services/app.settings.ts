import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AppSettings {
  public static BASE_URL = environment.basePath;
  public static HEADER_CONTENT_TYPE_VALUE = 'application/json';
  public static HEADER_AUTHORIZATION = 'Authorization';
  public static HEADER_CONTENT_TYPE = 'Content-Type';
  public static HEADER_ACCEPT = 'Accept';
  public static HEADER_ACCEPT_LANGUAGE = 'en-US';
  public static TOKEN_KEY = 'Token';
}
