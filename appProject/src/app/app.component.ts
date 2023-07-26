import { Component } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './interfaces/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post: Post[] = []
  constructor(private postSrv: PostService) {
    //per assicurarmi di assegnare la variabile solo DOPO il completamento di getPosts, utilizzo un .then (vedi => commento dentro .getPosts :D)
    this.postSrv.getPosts().then(_ => {
      this.post = this.postSrv.posts
    })
  }
}
