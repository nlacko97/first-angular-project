import { EventListComponent } from "./events/event-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventListResolver } from "./events/events-list-resolver";
import { CreateSessionComponent, EventResolver } from "./events";


export const appRoutes:Routes = [
    {
        path: 'events',
        component: EventListComponent,
        resolve: {
            events: EventListResolver
        }
    },
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
        
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
        resolve: {event: EventResolver}
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'events/session/new',
        component: CreateSessionComponent
    }
]