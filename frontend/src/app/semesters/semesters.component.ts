import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../semester.service';
import { Semester } from '../semester/semester';

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.scss']
})
export class SemestersComponent implements OnInit {
  public semesters!: Semester[];

  constructor(private semesterService: SemesterService) { }

  ngOnInit(): void {
    this.getSemesters();
  }

  public getSemesters(): void {
    this.semesterService.getSemesters().subscribe(
      (Response: Semester[]) => {
        this.semesters = Response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
