import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

/**
 * Code-behind for app root.
 */
export class AppComponent {

  /**
   * The pages title.
   */
  public readonly title: string

  /**
   * Initializes the AppComponent class.
   */
  constructor() {

    this.title = 'MongoDBlog'
  }
}
