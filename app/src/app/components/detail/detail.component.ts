import { Component, OnInit } from '@angular/core';
import Issue from 'src/app/models/issue';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IssuesService } from 'src/app/issues.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  issue: Issue;
  errorMessage : string;

  constructor(private route: ActivatedRoute, private issuesService: IssuesService) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.getIssueDetail(id);
    });

    
  }

  getIssueDetail(id: number) {
    this.issuesService.getIssue(id).subscribe(issue => this.issue = issue, error => this.errorMessage = error);
  }

}
