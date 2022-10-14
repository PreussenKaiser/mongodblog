/**
 * Represents a written blog.
 */
export interface IBlog {
    /**
     * The blog's identifier.
     */
    id?: any

    /**
     * The blog's title.
     */
    title?: string

    /**
     * The blog's content.
     */
    body?: string

    /**
     * The blog's written date.
     */
    date?: Date
}