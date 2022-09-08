import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  items: number[];
  id: number;

  constructor(private _hackerNewsAPIService: HackernewsApiService) {
    this.items = Array(30);
    this.id = 0;
  }

  ngOnInit(): void {
    this._hackerNewsAPIService.fetchStories().subscribe(
      (items) => (this.items = items),
      (error) => console.log('Error fetching stories')
    );
  }
}
