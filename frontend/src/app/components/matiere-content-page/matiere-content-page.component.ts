import { Component, OnInit } from '@angular/core';
import { Contenu } from 'src/app/contenu';
import { SemesterService } from 'src/app/semester.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-matiere-content-page',
  templateUrl: './matiere-content-page.component.html',
  styleUrls: ['./matiere-content-page.component.scss']
})
export class MatiereContentPageComponent implements OnInit {
  public contenus!: Contenu[];
  public semesterName!: string;
  public matiereName!: string;

  constructor(private semesterService: SemesterService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.semesterName = this.route.snapshot.params['semesterName'];
    this.matiereName = this.route.snapshot.params['matiereName'];
    this.getMatieresContent();
  }

  public getMatieresContent(): void {
    this.semesterService.getContenus(this.semesterName, this.matiereName).subscribe(
      (Response: Contenu[]) => {
        this.contenus = Response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  onGetContent(contentName: string) { 
    // contentName : 'cours' | 'tps' | 'tds' | 'exams'
    this.router.navigateByUrl(`smia/${this.semesterName}/${this.matiereName}/${contentName}`);
  }

}
