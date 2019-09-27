import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { INewsItem } from '../news-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unitedkingdom',
  templateUrl: './unitedkingdom.component.html',
  styleUrls: ['./unitedkingdom.component.scss']
})
export class UnitedkingdomComponent implements OnInit {
  
  errorMessage = '';
  newsItems: INewsItem[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNewsItems().subscribe({
      next: items => {
        this.newsItems = items;
      },
      error: err => this.errorMessage = err
    });
  }

}
