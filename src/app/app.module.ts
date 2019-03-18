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
import {FormsModule} from '@angular/forms';
import {AdminMainComponent} from './admin/ui/main/admin-main.component';
import {MainComponent} from './ui/main/main.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClientModule} from '@angular/common/http';
import {NotFoundComponent} from './ui/pages/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './admin/login/login.component';
import {HeaderComponent} from './ui/header/header.component';
import {FooterComponent} from './ui/footer/footer.component';
import {ResumeComponent} from './ui/pages/resume/resume.component';
import {ProjectsComponent} from './admin/projects/projects.component';
import {ProjectFormComponent} from './admin/projects/project-form/project-form.component';
import {TechnologiesComponent} from './admin/technologies/technologies.component';
import {TechnologyFormComponent} from './admin/technologies/technology-form/technology-form.component';
import {ChartsModule} from 'ng2-charts';
import { TerminalComponent } from './ui/pages/terminal/terminal.component';

// Add an icon to the library for convenient access in other components
library.add(faCoffee);
library.add(faTrash);
library.add(faEdit);


@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        AdminNavbarComponent,
        AdminMenuComponent,
        PostComponent,
        PostFormComponent,
        AdminMainComponent,
        MainComponent,
        NotFoundComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        ResumeComponent,
        ProjectsComponent,
        ProjectFormComponent,
        TechnologiesComponent,
        TechnologyFormComponent,
        TerminalComponent
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        // AngularFireStorageModule,
        AngularFirestoreModule,
        BrowserModule,
        NgbModule,
        FontAwesomeModule,
        AngularEditorModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule {
}
