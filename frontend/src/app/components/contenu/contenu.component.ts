import { Component, Input, OnInit } from '@angular/core';
import { Contenu } from 'src/app/contenu';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.scss']
})
export class ContenuComponent implements OnInit {
  @Input() contenu!: Contenu;

  ngOnInit(): void {
  }

}
