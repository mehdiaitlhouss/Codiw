import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  scrolled!: boolean;

  ngOnInit(): void {
    this.scrolled = false;
    this.changeNavBarOnScrolled();
  }

  changeNavBarOnScrolled() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    })
  }
}
