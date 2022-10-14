import { Injectable } from '@angular/core';
import { IBlog } from '../models/IBlog';
import { Repository } from './Repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Queries blogs from a MongoDB database.
 */
export class BlogService extends Repository<IBlog> {
  /**
   * The api's url.
   */
  private readonly url: string

  /**
   * The client to call the blog API with.
   */
  private readonly client: HttpClient

  /**
   * Initializes the BlogService class from application configuration.
   * @param client The client to call the blog api with.
   */
  constructor(client: HttpClient) {
    super()

    this.client = client
    this.url = 'http://localhost:8080/api/blogs'
  }

  /**
   * Creates a blog in the API.
   * @param entity The blog to create.
   * @returns The resolved promise.
   */
  public createAsync(entity: IBlog): Observable<Object> {
    const result = this.client.post(this.url, entity)

    return result
  }

  /**
   * Gets all blogs from the API.
   * @returns All blogs.
   */
  public getAllAsync(): Observable<IBlog[]> {
    const blogs = this.client.get<IBlog[]>(this.url)

    return blogs
  }

  /**
   * Gets a blog from the API.
   * @param id The blog's identifier.
   * @returns The found blog.
   */
  public getAsync(id: any): Observable<IBlog> {
    const blog = this.client.get<IBlog>(`${this.url}/${id}`)

    return blog
  }

  /**
   * Updates a blog in the API.
   * @param id The blog's identifier.
   * @param values The blog's new values.
   * @returns The resolved promise.
   */
  public updateAsync(id: any, values: IBlog): Observable<Object> {
    const result = this.client.put(`${this.url}/${id}`, values)

    return result
  }

  /**
   * Deletes a blog from the API.
   * @param id The blog's identifier.
   * @returns The resolved promise.
   */
  public deleteAsync(id: any): Observable<Object> {
    const result = this.client.delete(`${this.url}/${id}`)

    return result
  }
}
