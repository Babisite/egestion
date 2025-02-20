import { SortOrder } from "../../util/SortOrder";

export type DepartmentsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  manager?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
