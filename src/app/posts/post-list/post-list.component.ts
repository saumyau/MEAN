import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector : 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'First Post', content: 'This is first\'s post'},
  //   {title: 'Second Post', content: 'This is second post'},
  //   {title: 'Third Post', content: 'This is third post'},
  //   {title: 'Fourth Post', content: 'This is fourth post'}
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;
  constructor( public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
