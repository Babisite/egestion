import { TeamsUpdateManyWithoutDepartmentsItemsInput } from "./TeamsUpdateManyWithoutDepartmentsItemsInput";

export type DepartmentsUpdateInput = {
  description?: string | null;
  manager?: string | null;
  name?: string | null;
  teamsItems?: TeamsUpdateManyWithoutDepartmentsItemsInput;
};
