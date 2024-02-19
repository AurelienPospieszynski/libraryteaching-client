import { HttpClient } from '@angular/common/http';
import RestClient from '../resources/rest-client';
import { Injectable } from '@angular/core';
import RestHttpClient from '../resources/rest-http-client';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private _restClient: RestClient;

  constructor(httpClient: HttpClient) {
    this._restClient = new RestHttpClient(httpClient);
  }

  /**
   * Retrieves all books from the server.
   *
   * @returns {Promise<Book[]>} A promise that resolves to an array of books.
   */
  public async getAllBooks() {
    return await firstValueFrom(this._restClient.get('/books'));
  }
}
