import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private rootUrl = environment.baseUrl;
  private firebaseUrl = environment.firebaseUrl;
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  postRequest(postUrl: string, myObject: any): Observable<any> {
    const url = `${this.rootUrl}/${postUrl}`;
    return this.http.post<any>(url, myObject, this.httpOptions).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getByIdUri(getUrl: string, localId: string, token: string): Observable<any> {
    const url = `${this.firebaseUrl}${getUrl}/${localId}.json?auth=${token}`;
    console.log('url', url);
    return this.http.get<any>(url);
  }
}
