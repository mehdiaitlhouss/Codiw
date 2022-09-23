import { Component, OnInit } from '@angular/core';
import { Achievement } from '../achievement/achievement';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  achievements!: Achievement[];

  ngOnInit(): void {
    this.achievements = achievements;
  }

}

const achievements = [
  {
    icon: "uil uil-video",
    type: "Courses",
    count: 134,
    background: "var(--color-danger)"
  },
  {
    icon: "uil uil-video",
    type: "Courses",
    count: 134,
    background: "var(--color-success)"
  },
  {
    icon: "uil uil-video",
    type: "Course",
    count: 134,
    background: "var(--color-primary)"
  }
];
