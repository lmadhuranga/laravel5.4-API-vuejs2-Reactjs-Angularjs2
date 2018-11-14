import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms'

import { PostService } from './services/post.service' 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: false} //<--- debugging purpose only
      )
    ],
    providers: [ PostService],
    bootstrap: [AppComponent],
    exports: [
      RouterModule
    ]
  })
  export class AppModule { }
  