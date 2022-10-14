import { Component, OnInit } from '@angular/core';
import { IBlog } from '../models/IBlog';
import { Repository } from '../services/Repository';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

/**
 * Code-behind for the dashboard.
 */
export class DashboardComponent implements OnInit {
  /**
   * All blogs.
   */
  public blogs: IBlog[] | null
 
  /**
   * Queries blogs.
   */
  private readonly blogService: Repository<IBlog>

  /**
   * Initializes the AppComponent class.
   * @param blogService The service to query blogs with.
   */
  constructor(blogService: Repository<IBlog>) {
    this.blogService = blogService
    this.blogs = null
  }

  /**
   * Initializes the component.
   */
  public ngOnInit(): void {
    this.blogService
      .getAllAsync()
      .subscribe(bs => this.blogs = bs)
  }
}
