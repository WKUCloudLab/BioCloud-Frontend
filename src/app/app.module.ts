import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { BioRouterService } from './bio-router.service';
 
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'create-job', component: CreateJobComponent },
  { path: 'upload-file', component: FileUploadComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateJobComponent,
    HomePageComponent,
    FileUploadComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [BioRouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
