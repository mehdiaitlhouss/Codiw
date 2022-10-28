import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatiereContentPageComponent } from './components/matiere-content-page/matiere-content-page.component';
import { MatieresPageComponent } from './components/matieres-page/matieres-page.component';
import { SemestersPageComponent } from './components/semesters-page/semesters-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'courses', component: CoursesPageComponent },
    { path: 'contact', component: ContactUsComponent },    
    { path: 'smia', component: SemestersPageComponent },
    { path: 'smia/:semesterName', component: MatieresPageComponent },
    { path: 'smia/:semesterName/:matiereName', component: MatiereContentPageComponent },
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}