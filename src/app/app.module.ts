import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminNavbarComponent} from './admin/ui/navbar/admin-navbar.component';
import {AdminMenuComponent} from './admin/ui/menu/admin-menu.component';
import {PostComponent} from './admin/post/post.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCoffee, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {PostFormComponent} from './admin/post/post-form/post-form.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AdminMainComponent} from './admin/ui/main/admin-main.component';
import { MainComponent } from './ui/main/main.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// Add an icon to the library for convenient access in other components
library.add(faCoffee);
library.add(faTrash);
library.add(faEdit);


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'posts', component: PostComponent},
      {path: 'posts/add', component: PostFormComponent},
      {path: 'posts/edit/:id', component: PostFormComponent}
    ]
  },


];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminNavbarComponent,
    AdminMenuComponent,
    PostComponent,
    PostFormComponent,
    AdminMainComponent,
    MainComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    AngularEditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
