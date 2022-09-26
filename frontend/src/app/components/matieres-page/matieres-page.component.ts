import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SemesterService } from 'src/app/semester.service';

@Component({
  selector: 'app-matieres-page',
  templateUrl: './matieres-page.component.html',
  styleUrls: ['./matieres-page.component.scss']
})
export class MatieresPageComponent implements OnInit {

  constructor() {private semesterService: SemesterService, private route: ActivatedRoute }

  ngOnInit(): void {
    const semesterName = +this.route.smia.parmas['semesterName'];
  }

}

