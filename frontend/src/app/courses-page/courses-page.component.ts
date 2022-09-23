import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  courses!: Course[];

  ngOnInit(): void {
    this.courses = courses;
  }
}

const courses = [
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  },
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inlaudantium molestiae repellat iste perferendis nesciunt nulla!",
    img: "./../../assets/course1.jpg"
  }
]