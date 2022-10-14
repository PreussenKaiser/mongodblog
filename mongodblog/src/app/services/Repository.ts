import { Observable } from "rxjs";

/**
 * Defines repository CRUD methods.
 */
export abstract class Repository<TEntity> {
    /**
     * Creates a model in the repository.
     * @param entity The blog to create.
     */
    abstract createAsync(entity: TEntity): Observable<Object>

    /**
     * Gets all models in the repository.
     * @return An array of models.
     */
    abstract getAllAsync(): Observable<TEntity[]>

    /**
     * Gets a model from the repository.
     * @param id The identifier of the model.
     * @return The found model.
     */
    abstract getAsync(id: any): Observable<TEntity>

    /**
     * Updates a model in the repository.
     * @param id The identifier of the model.
     * @param values The updated values.
     */
    abstract updateAsync(id: any, values: TEntity): Observable<Object>

    /**
     * Deletes a model from the repository.
     * @param id The identifier of the model.
     */
    abstract deleteAsync(id: any): Observable<Object>
}