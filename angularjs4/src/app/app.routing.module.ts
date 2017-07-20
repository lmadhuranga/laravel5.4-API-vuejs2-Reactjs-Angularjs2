import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
    { path: 'posts', component: PostsComponent },
    { path: 'home',     component: HomeComponent}
    // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
