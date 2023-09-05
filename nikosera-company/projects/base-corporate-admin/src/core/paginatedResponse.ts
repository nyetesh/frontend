export interface PaginatedResponse<T = void> {
  result: T;
  content: T;
  pageNumber: number;
  size: number;
  total?: number;
  totalCount: number;
}
