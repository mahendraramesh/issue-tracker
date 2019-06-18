import { Component, OnInit, Inject } from '@angular/core';
import { IssuesService } from 'src/app/issues.service';
import Issue from '../../models/issue';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  showAlert: boolean = false;

  constructor(private issueService: IssuesService, private router: Router) { }

  ngOnInit() {
  }

  createIssue(title: string, description: string, owner: string, priority: string, status: string) {
    /* let number: number = 10;
    const issue: Issue = {
      number: number,
      title: title,
      description: description,
      owner: owner,
      priority: priority,
      status: status
    }

    this.issueService.createIssue(issue); */

    // TODO add logic to get the issue details and call the api

    this.router.navigate(['/']);
  }

}
