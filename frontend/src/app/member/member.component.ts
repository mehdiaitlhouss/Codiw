import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person/person';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input() member!: Person;

  ngOnInit(): void {
  }
}
