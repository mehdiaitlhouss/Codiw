import { Component, OnInit } from '@angular/core';
import { Person } from './person';

import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  persons!: Person[];
  ngOnInit(): void {
    this.persons = persons
  }
}

const persons = [
  {
    name: "Mehdi",
    type: "Student",
    img: "./../../assets/avatar1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea quidem ipsa doloremque labore rem quisquam. Non labore obcaecati numquam vero autem nesciunt praesentium inventore! Vel id sapiente quaerat aperiam!"
  },
  {
    name: "Mehdi",
    type: "Student",
    img: "./../../assets/avatar1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea quidem ipsa doloremque labore rem quisquam. Non labore obcaecati numquam vero autem nesciunt praesentium inventore! Vel id sapiente quaerat aperiam!"
  },
  {
    name: "Mehdi",
    type: "Student",
    img: "./../../assets/avatar1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea quidem ipsa doloremque labore rem quisquam. Non labore obcaecati numquam vero autem nesciunt praesentium inventore! Vel id sapiente quaerat aperiam!"
  },
  {
    name: "Mehdi",
    type: "Student",
    img: "./../../assets/avatar1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea quidem ipsa doloremque labore rem quisquam. Non labore obcaecati numquam vero autem nesciunt praesentium inventore! Vel id sapiente quaerat aperiam!"
  },
  {
    name: "Mehdi",
    type: "Student",
    img: "./../../assets/avatar1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea quidem ipsa doloremque labore rem quisquam. Non labore obcaecati numquam vero autem nesciunt praesentium inventore! Vel id sapiente quaerat aperiam!"
  }
]
