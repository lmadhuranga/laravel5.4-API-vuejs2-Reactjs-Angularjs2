import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'
import { from } from 'rxjs';

import { PostComponent } from './post.component';
import { PostService } from '../services/post.service';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent ], 
      imports: [FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.postsList =  [
      {
        "id": 1,
        "title": "Post 1",
        "author": "Auth1"
      },
      {
        "id": 2,
        "title": "Post 2",
        "author": "Auth1"
      }
    ];
    component.post = {
      title:'title',
      author:'tet',
      id:1
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(1+1).toEqual(3);
  });

});
