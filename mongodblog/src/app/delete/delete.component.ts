import { Component, OnInit } from '@angular/core';
import { Repository } from '../services/Repository';
import { IBlog } from '../models/IBlog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ObjectId } from 'mongodb';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.less']
})

/**
 * Code-behind for the delete component.
 */
export class DeleteComponent implements OnInit {
  /**
   * The blog to delete.
   */
  public blog: IBlog | null

  /**
   * Routing information which contains the blog's identifier.
   */
  private readonly route: ActivatedRoute
   
  /**
   * For navigating back.
   */
  private readonly location: Location
   
  /**
   * The service to delete the blog from.
   */
  private readonly blogService: Repository<IBlog>

  /**
   * Initializes the DeleteComponent class.
   * @param blogService The service to delete the blog with.
   * @param location For navigating back.
   * @param route Routing information which contains the blog's identifier.
   */
  constructor(blogService: Repository<IBlog>,
              location: Location,
              route: ActivatedRoute) {
    this.route = route
    this.location = location
    this.blogService = blogService

    this.blog = null
  }

  /**
   * Initializes the blog to delete.
   */
  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id == null)
      return

    this.blogService
      .getAsync(id)
      .subscribe(b => this.blog = b)
  }

  /**
   * Deletes the blog.
   * @returns The resolved promise.
   */
  public delete(): void {
    if (this.blog == null)
      return

    this.blogService
      .deleteAsync(this.blog.id)
      .subscribe()

    this.goBack()
  }
  
  /**
   * Goes back to the previous page.
   */
  public goBack(): void {
    this.location.back()
  }
}
