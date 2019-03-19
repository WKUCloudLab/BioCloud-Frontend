import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AccordionModule } from "ngx-accordion";
import { NgDragDropModule } from 'ng-drag-drop';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ViewJobComponent } from './view-job/view-job.component';

import { BioRouterService } from './bio-router.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { FileStructureBuilderComponent } from './file-structure-builder/file-structure-builder.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
 
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'create-job', component: CreateJobComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: 'view-job', component: ViewJobComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateJobComponent,
    HomePageComponent,
    FileUploadComponent,
    FileStructureBuilderComponent,
    ViewJobComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    NgDragDropModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    }),
    AccordionModule
  ],
  providers: [
    BioRouterService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
