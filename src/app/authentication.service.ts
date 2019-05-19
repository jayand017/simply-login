import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(userid: string, passwd: string): Observable<any> {
    return this.http.post('http://localhost:3000/user', {userid: userid, passwd: passwd})
      .pipe(map(res => res))
  }
}
