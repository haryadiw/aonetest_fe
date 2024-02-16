import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Api } from '../../library/api/api';
import { User } from '../../interface/user/user';
import { Usertable } from '../../interface/user/usertable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = Api.urlUsers();
  constructor(
    private http: HttpClient
  ) { }

  getUsers(page : number): Observable<Usertable> {
    return this.http.get<Usertable>(this.url+"?page="+page);
  }

  getUserDetail(id : number): Observable<User> {

    return this.http.get<User>(this.url+"/"+id);

  }

  getProfile(){
    var urlProfile = Api.urlProfile();
    return this.http.get<User>(urlProfile);
  }

}
