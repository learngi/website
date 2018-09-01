import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './common/auth.gaurd';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SelfplacedComponent } from './selfplaced/selfplaced.component';
import { ContactComponent } from './contact/contact.component';
import { OnlinetrainingComponent } from './onlinetraining/onlinetraining.component';
import { ClasstrainingComponent } from './classtraining/classtraining.component';
import { CorparateComponent } from './corparate/corparate.component';
import { TraningComponent } from './traning/traning.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { IntershipComponent } from './intership/intership.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'selfplaced/:type',
    component: SelfplacedComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'online',
    component: OnlinetrainingComponent
  },
  {
    path: 'classtraining',
    component: ClasstrainingComponent
  },
  {
    path: 'corporate',
    component: CorparateComponent
  },
  {
    path: 'trainings',
    component: TraningComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'intership',
    component: IntershipComponent
  },
  {
    path: 'upload',
    component: UploadComponent,
    canActivate: [AuthGuard]
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

export const routing = RouterModule.forRoot(appRoutes);
