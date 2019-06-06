import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  newPost = 'hi';
  enteredValue = '';

  onAddPost(postInput: HTMLTextAreaElement) {
  // alert('Post added!');
    this.newPost = postInput.value;
  }
  onAddPost1() {
    this.newPost = this.enteredValue;
  }
}
