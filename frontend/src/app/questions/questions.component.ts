import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions!: Question[];

  ngOnInit(): void {
    this.questions = questions;
  }
}

const questions = [
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!"
  }
]
