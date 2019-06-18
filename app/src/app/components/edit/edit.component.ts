import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from 'src/app/issues.service';
import Issue from '../../models/issue';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  issue: Issue;
  errorMessage : string;

  constructor(private route: ActivatedRoute, private issuesService: IssuesService, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.issuesService.getIssue(id).subscribe(issue => this.issue = issue, error => this.errorMessage = error);
  }

  updateIssue() {
    this.router.navigate(['/']);

    // TODO add logic to get the updated issue details and call the api
  }

}
