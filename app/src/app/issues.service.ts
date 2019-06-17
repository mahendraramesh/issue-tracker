import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import Issue from './models/issue';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.uri}/issues`)
                .pipe(
                  retry(3),
                  catchError(this.errorHandler)
                );
  }

  getIssue(number: number): Observable<Issue> {
    return this.http.get<Issue>(`${this.uri}/issues/${number}`);
  }

  createIssue(issue: Issue) {
    this.http.post(`${this.uri}/issues/add`, issue);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Unable to fetch issues");
  }
}
