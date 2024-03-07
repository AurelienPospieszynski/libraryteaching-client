import { HttpClient } from '@angular/common/http';
import RestClient from '../resources/rest-client';
import { Injectable } from '@angular/core';
import RestHttpClient from '../resources/rest-http-client';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _restClient: RestClient;

  constructor(httpClient: HttpClient) {
    this._restClient = new RestHttpClient(httpClient);
  }

  /**
   * Retrieves all books from the server.
   *
   * @returns {Promise<Category[]>} A promise that resolves to an array of books.
   */
  public async getAllCategories() {
    return await firstValueFrom(this._restClient.get('/categories'));
  }
}
