import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppSettings } from '../app.settings';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const roles = route.data['roles'] as Array<string>;
        if (sessionStorage.getItem('token')) {
            // await this._sharedService.getEmpList()
            return (roles == null || roles.indexOf(sessionStorage.getItem('role')) !== -1);
        }

        this.router.navigate(['/login'], {
            queryParams: {
                returnUrl: state.url
            }
        });
        return false;
    }




}
