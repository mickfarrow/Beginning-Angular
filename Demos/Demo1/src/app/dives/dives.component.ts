import { Component, OnInit } from '@angular/core';
import { DiveService } from './dive.service';
import { IDive } from './dive';

@Component({
  selector: 'pm-dives',
  templateUrl: './dives.component.html',
  styleUrls: ['./dives.component.css']
})
export class DivesComponent implements OnInit {

  filteredDives: IDive[];
  dives: IDive[] = [];
  errorMessage: string;

  constructor(private diveService: DiveService) { }

  ngOnInit() {
    this.diveService.getDives().subscribe(
      dives => {
        this.dives = dives;
        this.filteredDives = this.dives;
      },
      error => this.errorMessage = <any>error      
    );
  }

}
