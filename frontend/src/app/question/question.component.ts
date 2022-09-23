import { Component, Input, OnInit } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question;
  open!: boolean;

  ngOnInit(): void {
    this.open = false;
  }

  onOpen() {
    this.open = ! this.open;
  }
}
