import { HttpErrorResponse, HttpXhrBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contenu } from 'src/app/contenu';
import { SemesterService } from 'src/app/semester.service';

@Component({
  selector: 'app-matieres-page',
  templateUrl: './matieres-page.component.html',
  styleUrls: ['./matieres-page.component.scss']
})
export class MatieresPageComponent implements OnInit {
  public contenus!: Contenu[];
  public semesterName!: string;

  constructor(private semesterService: SemesterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.semesterName = this.route.snapshot.params['semesterName'];
    this.getMatieres();
  }

  public getMatieres(): void {
    this.semesterService.getMatieres(this.semesterName).subscribe(
      (Response: Contenu[]) => {
        this.contenus = Response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onGetContenet(contentName: string) {
    
  }
}

