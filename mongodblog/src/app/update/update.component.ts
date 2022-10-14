import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from '../models/IBlog';
import { Repository } from '../services/Repository';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.less']
})

/**
 * Code-behind for the update component.
 * Updates a blog on form submission.
 */
export class UpdateComponent implements OnInit {
  /**
   * Key for the TinyMCE editor.
   */
  public readonly apiKey: string

  /**
   * The blog to update.
   */
  public blog: IBlog | null

  /**
   * The service to update blogs with.
   */
  private readonly blogService: Repository<IBlog>

  /**
   * The route to get the blog's identifier from.
   */
  private readonly route: ActivatedRoute

  /**
   * Used to navigate to the previous page.
   */
  private readonly location: Location

  /**
   * Initializes the UpdateComponent class.
   * @param route The route to get the blog's identifier from.
   * @param location Used to navigate to the previous page.
   * @param blogService The service to update blogs with.
   */
  constructor(route: ActivatedRoute,
              location: Location,
              blogService: Repository<IBlog>) {
    this.blogService = blogService
    this.route = route
    this.location = location

    this.apiKey = 'ol0e8514tcx5swcfoybg5cvwo5ufvei69l4jg5j8la1xi4wh'
    this.blog = null
  }

  /**
   * Initializes the blog's identifier from route parameters.
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
   * Updates a blog in the service.
   * @returns The resolved promise.
   */
  public update(): void {
    if (this.blog == null)
      return

    this.blogService
      .updateAsync(this.blog.id, this.blog)
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
