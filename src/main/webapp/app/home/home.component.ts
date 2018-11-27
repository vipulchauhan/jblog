import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { IPost } from '../../app/shared/model/post.model';
import { PostService } from '../entities/post/post.service';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
    posts: IPost[];

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.postService.query().subscribe(
            (res: HttpResponse<IPost[]>) => {
                this.posts = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
}
