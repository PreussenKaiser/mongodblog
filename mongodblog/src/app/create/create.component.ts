import { Component, OnInit } from '@angular/core';
import { IBlog } from '../models/IBlog';
import { Repository } from '../services/Repository';
import { Location } from '@angular/common';
import * as dotenv from 'dotenv'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})

/**
 * Code-behind for the create component.
 */
export class CreateComponent implements OnInit {
  /**
   * The key for the TinyMCE editor.
   */
  public readonly apiKey: string

  /**
   * Values of the blog to create.
   */
  public blog: IBlog

  /**
   * Used to navigate to the previous page.
   */
  private readonly location: Location

  /**
   * The service to create blogs with.
   */
  private readonly blogService: Repository<IBlog>

  /**
   * Initializes the CreateComponent class.
   * @param location Used to navigate to the previous page.
   * @param blogService The service to query blogs with.
   */
  constructor(location: Location,
              blogService: Repository<IBlog>) {
    this.blogService = blogService
    this.location = location

    this.apiKey = 'ol0e8514tcx5swcfoybg5cvwo5ufvei69l4jg5j8la1xi4wh'
    this.blog = {
      title: '',
      body: ''
    }
  }

  /**
   * Initializes the component.
   */
  public ngOnInit(): void { }

  /**
   * Creates a blog.
   * @return The resolved promise.
   */
  public create(): void {
    this.blogService
      .createAsync({
        title: this.blog.title,
        body: this.blog.body,
        date: new Date()
      })
      .subscribe()

    this.goBack()
  }

  /**
   * Navigates to the previous page.
   */
  public goBack() {
    this.location.back()
  }
}
