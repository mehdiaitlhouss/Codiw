import { Component, OnInit } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions!: Question[];

  ngOnInit(): void {
    this.questions = data;
  }

  onOpen(id: number) {
    this.questions[id].open = !this.questions[id].open;
  }
}

const data = [
  {
    id: 0,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  },
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  },
  {
    id: 6,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  },
  {
    id: 7,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  },
  {
    id: 8,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  },
  {
    id: 9,
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis ipsam temporibus impedit accusantium nisi pariatur accusamus quos tenetur sequi, corrupti ex ea. Impedit aut et ea voluptatem. Sed, sit!",
    open: false
  }
]
