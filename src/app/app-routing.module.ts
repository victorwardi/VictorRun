import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {PostComponent} from './admin/post/post.component';
import {PostFormComponent} from './admin/post/post-form/post-form.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './ui/main/main.component';
import {PageNotFoundComponent} from './ui/page-not-found/page-not-found.component';
import {AuthGuardService} from './admin/auth/auth-guard.service';
import {NotAllowedComponent} from './admin/auth/not-alowed/not-allowed.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {
    path: 'admin',  canActivate: [AuthGuardService], component: AdminComponent, children: [
      {path: 'posts', component: PostComponent},
      {path: 'posts/add', component: PostFormComponent},
      {path: 'posts/edit/:id', component: PostFormComponent}
    ]
  },
  {path: 'not-allowed', component: NotAllowedComponent},
  {path: 'not-found', component: PageNotFoundComponent},
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
