import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectId } from 'mongodb';
import { IBlog } from '../models/IBlog';
import { Repository } from '../services/Repository';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.less']
})

/**
 * Code-behind for the read component.
 */
export class ReadComponent implements OnInit {
  /**
   * The blog to read.
   */
  public blog: IBlog | null

  /**
   * Routing data for the component.
   * Used to get the blog to display.
   */
  private readonly route: ActivatedRoute

  /**
   * The service to get blogs with.
   */
  private readonly blogService: Repository<IBlog>

  /**
   * Initializes the ReadComponent class.
   * @param route The route to get the blog from.
   * @param blogService The service to get blogs with.
   */
  constructor(route: ActivatedRoute,
              blogService: Repository<IBlog>) {
    this.route = route
    this.blogService = blogService

    this.blog = null
  }

  /**
   * Initializes the blog to display.
   */
  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.blogService
      .getAsync(id)
      .subscribe(b => this.blog = b)
  }
}
