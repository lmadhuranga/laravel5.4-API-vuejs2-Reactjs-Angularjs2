import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  
  postsList : Post[];
  addForm : boolean = false;
  editForm : boolean = false;
  post:Post; 
  
  constructor(public postService:PostService) { }
  
  ngOnInit() {
    this.getPosts()
  }
  // Fetch all the post from back end 
  getPosts(){
    this.postService.getPosts().subscribe((posts) => {
      this.postsList = posts;
    });
  }
  
  // Display edit page
  displayEditPost(post){
    // If add form open close it
    this.addForm==true || this.cancelEdit();
    this.post = post;
    this.editForm = true;
  }
  
  // Submit updated data to server
  updatePost(formData : Post){
    this.postService.updatePost(formData).subscribe((res) => {
      console.log('Updated Succesfull');
      delete(this.post);
      this.editForm = false;
    });
  }
  
  // Cancel edit - Clear all field and hide the edit form
  cancelEdit(){
    delete(this.post);
    this.editForm = false;
    return false;
  }
  
  // Display Add form
  displayAddForm (){
    // If edit form open, close it
    this.editForm==true || this.cancelEdit();
    
    this.addForm = true;
    this.post = {
      title: '',
      author: '',
      id: 0
    }
  }

  // Submit new post data to server
  addPost(formData){
    this.postService.addPost(formData).subscribe((res) => {
      // Refresh the post list
      this.getPosts();
      // todo:: add alert for message
      console.log('Updated Succesfull');
      delete(this.post);
      this.addForm = false;
    });    
  }
  
  // Cancel Add form
  cancelAdd(type){
    // Hide the add form
    this.addForm = false;
    delete(this.post);
    return false;
  }
  
  // Deleted post data from server
  deletePost(dPost){
    let deleteid = dPost.id;
    this.postService.deletePost(deleteid).subscribe((res) => {
      // Clear the data in local list
      for (let index = 0; index < this.postsList.length; index++) {
        if(deleteid == this.postsList[index].id){
          this.postsList.splice(index,1);
        }
      }
    }); 
  }
  
}

interface Post {
  author: string,
  id: number,
  title: string
}