import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../issues.service';
import Issue from '../../models/issue';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];

  constructor(private issuesService: IssuesService, private router: Router) { }

  ngOnInit() {
    this.getIssues();
  }
  
  getIssues() {
    this.issuesService.getIssues().subscribe(issues => this.issues = issues);
  }

  editIssue(id:string) {
    this.router.navigate([`/edit/${id}`]);
  }

  createIssue() {
    this.router.navigate([`/create`]);
  }
}
