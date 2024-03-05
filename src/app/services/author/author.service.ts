import { HttpClient } from '@angular/common/http';
import RestClient from '../resources/rest-client';
import { Injectable } from '@angular/core';
import RestHttpClient from '../resources/rest-http-client';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private _restClient: RestClient;

  constructor(httpClient: HttpClient) {
    this._restClient = new RestHttpClient(httpClient);
  }

  /**
   * Récupère toutes les données des auteurs depuis le serveur.
   *
   * @returns {Promise<Author[]>} Une promesse qui résout avec un tableau contenant toutes les données des auteurs.
   */
  public async getAllAuthors() {
    return await firstValueFrom(this._restClient.get('/authors'));
  }
}