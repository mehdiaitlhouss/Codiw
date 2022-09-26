import { Component, OnInit } from '@angular/core';
import { Person } from '../persons/person';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team!: Person[];

  ngOnInit(): void {
    this.team = team;
  }
}

const team = [
  {
    name: "Shatta Wale",
    img: "./../../assets/tm1.jpg",
    domain: "Expert Tuto",
    socials: {
        facebook: "string",
        instagram: "string",
        twitter: "string"
    }
  },
  {
    name: "Shatta Wale",
    img: "./../../assets/tm1.jpg",
    domain: "Expert Tuto",
    socials: {
        facebook: "string",
        instagram: "string",
        twitter: "string"
    }
  },
  {
    name: "Shatta Wale",
    img: "./../../assets/tm1.jpg",
    domain: "Expert Tuto",
    socials: {
        facebook: "string",
        instagram: "string",
        twitter: "string"
    }
  },
  {
    name: "Shatta Wale",
    img: "./../../assets/tm1.jpg",
    domain: "Expert Tuto",
    socials: {
        facebook: "string",
        instagram: "string",
        twitter: "string"
    }
  }
]
