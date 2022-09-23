import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Semester } from './semester/semester';
import { Matiere } from './matiere/matiere';
import { Contenu } from './contenu/contenu';
import { Ressource } from './ressource/ressource';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSemesters(): Observable<any> {
    return this.http.get<Semester[]>(`${this.apiServerUrl}/api/v1/smia`);
  }

  public getMatieres(semesterName: string): Observable<any> {
    return this.http.get<Matiere[]>(`${this.apiServerUrl}/api/v1/smia/${semesterName}`);
  }

  public getContenus(semesterName: string, matiereName: string): Observable<any> {
    return this.http.get<Contenu[]>(`${this.apiServerUrl}/api/v1/smia/${semesterName}/${matiereName}`);
  }

  public getRessources(semesterName: string, matiereName: string, ressourceName: string): Observable<any> {
    return this.http.get<Ressource[]>(`${this.apiServerUrl}/api/v1/smia/${semesterName}/${matiereName}/${ressourceName}`);
  }
}
