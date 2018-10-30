import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './admin/ui/navbar/navbar.component';
import {MenuComponent} from './admin/ui/menu/menu.component';
import {SampleComponent} from './admin/sample/sample.component';
import {PostComponent} from './admin/post/post.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faCoffee, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import { PostFormComponent } from './admin/post/post-form/post-form.component';
import {RouterModule, Routes} from '@angular/router';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FormsModule} from '@angular/forms';

// Add an icon to the library for convenient access in other components
library.add(faCoffee);
library.add(faTrash);
library.add(faEdit);


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/posts', component: PostComponent},
  {path: 'admin/posts/add', component: PostFormComponent},
  {path: 'admin/posts/edit/:id', component: PostFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    MenuComponent,
    SampleComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    EditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
