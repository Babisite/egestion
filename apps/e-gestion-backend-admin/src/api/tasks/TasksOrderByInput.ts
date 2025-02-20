import { SortOrder } from "../../util/SortOrder";

export type TasksOrderByInput = {
  actualHours?: SortOrder;
  checklist?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  estimatedHours?: SortOrder;
  id?: SortOrder;
  labels?: SortOrder;
  priority?: SortOrder;
  projectId?: SortOrder;
  recurringPattern?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
