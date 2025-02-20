import { SortOrder } from "../../util/SortOrder";

export type TeamsOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  teamLeader?: SortOrder;
  updatedAt?: SortOrder;
};
