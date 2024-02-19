import { Observable } from 'rxjs';

/**
 * Represents a REST client interface.
 */
export default interface RestClient {
  get(url: string): Observable<any>;
  post<T>(url: string, body: any): Observable<T>;
  put<T>(url: string, body: any): Observable<T>;
  delete(url: string): Observable<any>;
}
