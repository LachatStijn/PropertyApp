import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  @Input() public property : Property;
  constructor() { }

  ngOnInit(): void {
  }

}
