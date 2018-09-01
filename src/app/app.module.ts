import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SelfplacedComponent } from './selfplaced/selfplaced.component';
import { ContactComponent } from './contact/contact.component';
import { OnlinetrainingComponent } from './onlinetraining/onlinetraining.component';
import { ClasstrainingComponent } from './classtraining/classtraining.component';
import { CorparateComponent } from './corparate/corparate.component';
import { TraningComponent } from './traning/traning.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationService } from './registration/register.service';
import { LoginService } from './login/login.service';
import { UploadComponent } from './upload/upload.component';
import {AuthGuard} from './common/auth.gaurd';
import {UploadService} from './upload/upload.service';
import { IntershipComponent } from './intership/intership.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    SelfplacedComponent,
    ContactComponent,
    OnlinetrainingComponent,
    ClasstrainingComponent,
    CorparateComponent,
    TraningComponent,
    RegistrationComponent,
    LoginComponent,
    UploadComponent,
    IntershipComponent
  ],
  imports: [BrowserModule, routing, HttpModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuard, RegistrationService, LoginService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule {}
