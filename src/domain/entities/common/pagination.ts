export interface IPaginationRequest {
  currentPage: number;
  itemsPerPage: number;
}

export interface IPaginationResponse extends IPaginationRequest {
  totalItems: number;
}
