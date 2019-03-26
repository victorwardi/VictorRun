import {Component, NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {PostComponent} from './admin/post/post.component';
import {PostFormComponent} from './admin/post/post-form/post-form.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './ui/main/main.component';
import {NotFoundComponent} from './ui/pages/not-found/not-found.component';
import {AuthGuardService} from './admin/auth/auth-guard.service';
import {LoginComponent} from './admin/login/login.component';
import {ResumeComponent} from './ui/pages/resume/resume.component';
import {TechnologyFormComponent} from './admin/technologies/technology-form/technology-form.component';
import {TechnologiesComponent} from './admin/technologies/technologies.component';
import {ProjectsComponent} from './admin/projects/projects.component';
import {ProjectFormComponent} from './admin/projects/project-form/project-form.component';
import {CanDeactivateGuard} from './services/can-deactivate-guard.service';
import {TerminalComponent} from './ui/pages/terminal/terminal.component';
import {ExperienceComponent} from "./ui/pages/experience/experience.component";
import {HomeComponent} from "./ui/pages/home/home.component";
import {EducationComponent} from "./ui/pages/education/education.component";
import {SkillsComponent} from './ui/pages/skills/skills.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'experience', component: ExperienceComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'education', component: EducationComponent},
      {path: 'run', component: ExperienceComponent},

    ]},
  {
    path: 'admin',  canActivate: [AuthGuardService], component: AdminComponent, children: [
      // POSTS
      {path: 'posts', component: PostComponent},
      {path: 'posts/add', component: PostFormComponent, canDeactivate: [CanDeactivateGuard]},
      {path: 'posts/edit/:id', component: PostFormComponent, canDeactivate: [CanDeactivateGuard]},
      // TECHNOLOGIES
      {path: 'technologies', component: TechnologiesComponent},
      {path: 'technologies/add', component: TechnologyFormComponent, canDeactivate: [CanDeactivateGuard]},
      {path: 'technologies/edit/:id', component: TechnologyFormComponent, canDeactivate: [CanDeactivateGuard]},
      // PROJECTS
      {path: 'projects', component: ProjectsComponent},
      {path: 'projects/add', component: ProjectFormComponent, canDeactivate: [CanDeactivateGuard]},
      {path: 'projects/edit/:id', component: ProjectFormComponent, canDeactivate: [CanDeactivateGuard] },
    ]
  },
  {path: 'terminal', component: TerminalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
