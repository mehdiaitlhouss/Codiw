import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Person } from '../person/person';

// import Swiper core and required modules
import SwiperCore, { Pagination, SwiperOptions } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonsComponent implements OnInit {

  persons!: Person[];
  ngOnInit(): void {
    this.persons = persons
  }

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  };
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
