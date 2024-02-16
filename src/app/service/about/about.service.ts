import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../../library/api/api';
import { About } from '../../interface/about/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private url = Api.urlAbout();
 
  constructor(
    private http: HttpClient
  ) { }

  getAbout(): Observable<About> {
    return this.http.get<About>(this.url);
  }

}
