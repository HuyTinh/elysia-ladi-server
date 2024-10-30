

/**
 *
 *
 * @export
 * @interface IAPIResponse
 * @template T
 */
export interface IAPIResponse<T> {
    code?: number,
    message?: string,
    data?: T | null
}