import { Injectable } from '@angular/core';
import RestClient from './rest-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * A class that implements the RestClient interface and provides HTTP methods for making RESTful API calls.
 */
@Injectable({
  providedIn: 'root', // Ceci assure que votre service est disponible dans toute l'application
})
export default class RestHttpClient implements RestClient {
  constructor(private http: HttpClient) {}

  /**
   * Sends an HTTP GET request to the specified URL.
   * @param url - The URL to send the request to.
   * @returns An Observable that emits the response data.
   */
  public get(url: string): Observable<any> {
    return this.http.get(environment.apiUrl + url);
  }

  /**
   * Sends an HTTP POST request to the specified URL with the given body.
   * @param url - The URL to send the request to.
   * @param body - The body of the request.
   * @returns An Observable that emits the response data.
   * @template T - The type of the response data.
   */
  public post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(environment.apiUrl + url, body);
  }

  /**
   * Sends an HTTP PUT request to the specified URL with the given body.
   * @param url - The URL to send the request to.
   * @param body - The body of the request.
   * @returns An Observable that emits the response data.
   * @template T - The type of the response data.
   */
  public put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(environment.apiUrl + url, body);
  }

  /**
   * Sends an HTTP DELETE request to the specified URL.
   * @param url - The URL to send the request to.
   * @returns An Observable that emits the response data.
   */
  public delete(url: string): Observable<any> {
    return this.http.delete(environment.apiUrl + url);
  }
}
