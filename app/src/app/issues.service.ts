import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import Issue from './models/issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    // return this.http.get('http://localhost:3000/issues');
    let issue: Issue = {
      title: "Integrate angular and node",
      description: "Use Node apis in angular",
      number: 1,
      status: "Open",
      priority: "Minor",
      owner: "Mahendra",
      createdOn: new Date().toDateString()
    };

    let issues: Issue[] = [issue];

    return of(issues);
    
  }
}
