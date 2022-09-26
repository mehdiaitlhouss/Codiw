import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contenu } from 'src/app/contenu';
import { SemesterService } from 'src/app/semester.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-semesters-page',
  templateUrl: './semesters-page.component.html',
  styleUrls: ['./semesters-page.component.scss']
})
export class SemestersPageComponent implements OnInit {
  public contenus!: Contenu[];

  constructor(private semesterService: SemesterService, private router: Router) { }

  ngOnInit(): void {
    this.getSemesters();
  }

  public getSemesters(): void {
    this.semesterService.getSemesters().subscribe(
      (Response: Contenu[]) => {
        this.contenus = Response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onGetSemester(semesterName: string): void {
    this.router.navigateByUrl(`smia/${semesterName}`);
  }
}
