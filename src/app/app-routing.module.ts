import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {PostComponent} from './admin/post/post.component';
import {PostFormComponent} from './admin/forms/post-form/post-form.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './ui/main/main.component';
import {NotFoundComponent} from './ui/pages/not-found/not-found.component';
import {AuthGuardService} from './admin/auth/auth-guard.service';
import {LoginComponent} from './admin/login/login.component';
import {ResumeComponent} from './ui/pages/resume/resume.component';
import {TechnologyFormComponent} from './admin/forms/technology-form/technology-form.component';
import {TechnologiesComponent} from './admin/technologies/technologies.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: 'resume', component: ResumeComponent},
    ]},
  {
    path: 'admin',  canActivate: [AuthGuardService], component: AdminComponent, children: [
      {path: 'posts', component: PostComponent},
      {path: 'posts/add', component: PostFormComponent},
      {path: 'posts/edit/:id', component: PostFormComponent},
      {path: 'techs', component: TechnologiesComponent},
      {path: 'techs/add', component: TechnologyFormComponent},
      {path: 'techs/edit/:id', component: TechnologyFormComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}