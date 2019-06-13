import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {


  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  // onAddPost(postInput: HTMLTextAreaElement) {
  // // alert('Post added!');
  //   this.newPost = postInput.value;
  // }
  // onAddPost1() {
  //   this.newPost = this.enteredValue;
  // }

  onAddPost1() {
    const post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post);
  }
}
