import { Component, Input, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories!: Category[];

  ngOnInit(): void {
    this.categories = categoriesTmp;
  }

}

const categoriesTmp = [
  {
    title: "Blockchain",
    description: "Grow you project for get lot of money in save your life",
    icon: "uil uil-bitcoin-circle",
    color: "var(--color-primary)"
  },
  {
    title: "Blockchain",
    description: "Grow you project for get lot of money in save your life",
    icon: "uil uil-bitcoin-circle",
    color: "var(--color-danger)"
  },
  {
    title: "Blockchain",
    description: "Grow you project for get lot of money in save your life",
    icon: "uil uil-bitcoin-circle",
    color: "var(--color-success)"
  },
  {
    title: "Blockchain",
    description: "Grow you project for get lot of money in save your life",
    icon: "uil uil-bitcoin-circle",
    color: "var(--color-warning)"
  },
  {
    title: "Blockchain",
    description: "Grow you project for get lot of money in save your life",
    icon: "uil uil-bitcoin-circle",
    color: "var(--color-success)"
  },
  {
    title: "Blockchain",
    description: "Grow you project for get lot of money in save your life",
    icon: "uil uil-bitcoin-circle",
    color: "var(--color-primary)"
  }
]
