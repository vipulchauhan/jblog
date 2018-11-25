import { Route } from '@angular/router';

import { HomeComponent } from './';

export const HOME_ROUTE: Route = {
    path: '',
    // component: HomeComponent,
    redirectTo: 'post',
    pathMatch: 'full',
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
};
