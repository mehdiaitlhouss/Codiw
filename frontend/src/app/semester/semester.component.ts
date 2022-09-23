import { Component, Input, OnInit } from '@angular/core';
import { Semester } from './semester';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {
  @Input() semester!: Semester;
  ngOnInit(): void {
  }
}
