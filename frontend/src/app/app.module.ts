import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContenuComponent } from './components/contenu/contenu.component';
import { RessourceComponent } from './components/ressource/ressource.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { PersonsComponent } from './components/persons/persons.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { TeamComponent } from './components/team/team.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SemestersPageComponent } from './components/semesters-page/semesters-page.component';
import { MatieresPageComponent } from './matieres-page/matieres-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ContenuComponent,
    RessourceComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    CategoriesComponent,
    CoursesComponent,
    CourseComponent,
    QuestionsComponent,
    PersonsComponent,
    HomePageComponent,
    AchievementsComponent,
    TeamComponent,
    AboutPageComponent,
    CoursesPageComponent,
    ContactUsComponent,
    SemestersPageComponent,
    MatieresPageComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
