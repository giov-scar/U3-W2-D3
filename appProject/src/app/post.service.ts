import { Injectable } from '@angular/core';
import { Post } from './interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "http://localhost:3000/posts"
  posts: Post[] = []
  constructor() { }

  getPosts() {
    return fetch(this.url)
      .then(res => res.json())
      .then((json) => {
        this.posts = json.posts
      })
      .catch(err => console.error(err))
  }
}
