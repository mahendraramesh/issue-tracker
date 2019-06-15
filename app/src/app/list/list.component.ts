import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import Issue from '../models/issue';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];

  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
    this.getIssues();
  }
  
  getIssues() {
    this.issuesService.getIssues().subscribe(issues => this.issues = issues);
  }
}
