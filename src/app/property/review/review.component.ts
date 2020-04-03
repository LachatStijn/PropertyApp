import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review:Review;
  constructor() { }

  ngOnInit(): void {
  }

}
