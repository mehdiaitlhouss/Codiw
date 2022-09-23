import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SemesterComponent } from './semester/semester.component';
import { MatiereComponent } from './matiere/matiere.component';
import { ContenuComponent } from './contenu/contenu.component';
import { RessourceComponent } from './ressource/ressource.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { PersonComponent } from './person/person.component';
import { PersonsComponent } from './persons/persons.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AchievementComponent } from './achievement/achievement.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { MemberComponent } from './member/member.component';
import { TeamComponent } from './team/team.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SemestersComponent } from './semesters/semesters.component';
@NgModule({
  declarations: [
    AppComponent,
    SemesterComponent,
    MatiereComponent,
    ContenuComponent,
    RessourceComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    CategoryComponent,
    CategoriesComponent,
    CoursesComponent,
    CourseComponent,
    QuestionComponent,
    QuestionsComponent,
    PersonComponent,
    PersonsComponent,
    HomePageComponent,
    AchievementComponent,
    AchievementsComponent,
    MemberComponent,
    TeamComponent,
    AboutPageComponent,
    CoursesPageComponent,
    ContactUsComponent,
    SemestersComponent,
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
