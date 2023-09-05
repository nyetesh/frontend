export interface RequestMapper<T, R> {
    map(data: T): R;
}
