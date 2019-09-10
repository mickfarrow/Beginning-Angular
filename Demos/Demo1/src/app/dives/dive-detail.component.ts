import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IDive } from './dive';
import { DiveService } from './dive.service';

@Component({
  selector: 'pm-dive-detail',
  templateUrl: './dive-detail.component.html',
  styleUrls: ['./dive-detail.component.css']
})
export class DiveDetailComponent implements OnInit {

  pageTitle = 'Dive Detail';
  errorMessage = '';
  dive: IDive | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private diveService: DiveService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getDive(id);
    }
  }

  getDive(id: number) {
    this.diveService.getDive(id).subscribe(
      d => this.dive = d,
      error => this.errorMessage = <any>error);
  }
}
