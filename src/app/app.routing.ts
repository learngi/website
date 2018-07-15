import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SelfplacedComponent } from './selfplaced/selfplaced.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [{
    path: 'home', component: HomeComponent
},
{
    path: 'about', component: AboutComponent
},
{
    path: 'selfplaced', component: SelfplacedComponent
},
{
    path: 'contact', component: ContactComponent
},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/home' }
];

export const routing = RouterModule.forRoot(appRoutes);
