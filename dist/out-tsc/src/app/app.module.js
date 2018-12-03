var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AccordionModule } from "ngx-accordion";
import { NgDragDropModule } from 'ng-drag-drop';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BioRouterService } from './bio-router.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { FileStructureBuilderComponent } from './file-structure-builder/file-structure-builder.component';
export function tokenGetter() {
    return localStorage.getItem('access_token');
}
var appRoutes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'create-job', component: CreateJobComponent },
    { path: 'upload', component: FileUploadComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                RegisterComponent,
                LoginComponent,
                CreateJobComponent,
                HomePageComponent,
                FileUploadComponent,
                FileStructureBuilderComponent
            ],
            imports: [
                RouterModule.forRoot(appRoutes),
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map