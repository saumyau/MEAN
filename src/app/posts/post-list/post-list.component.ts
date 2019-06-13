import { Component, Input } from '@angular/core';

@Component({
  selector : 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'This is first\'s post'},
  //   {title: 'Second Post', content: 'This is second post'},
  //   {title: 'Third Post', content: 'This is third post'},
  //   {title: 'Fourth Post', content: 'This is fourth post'}
  // ];
  @Input() posts = [];
}
