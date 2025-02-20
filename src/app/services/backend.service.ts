import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Appuser } from '../appuser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private username: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
   }

   setUserPassword(password: string): Observable<Appuser> {
    const user: Appuser = {
      username: this.username,
      password: password
    };
    return this.http.post<Appuser>(environment.backend.endpoints.savePasswordUrl, user);
  }

  getCurrentUsername(): string {
    return this.username;
  }
}
