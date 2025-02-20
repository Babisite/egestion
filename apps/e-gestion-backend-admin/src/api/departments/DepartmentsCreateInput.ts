import { TeamsCreateNestedManyWithoutDepartmentsItemsInput } from "./TeamsCreateNestedManyWithoutDepartmentsItemsInput";

export type DepartmentsCreateInput = {
  description?: string | null;
  manager?: string | null;
  name?: string | null;
  teamsItems?: TeamsCreateNestedManyWithoutDepartmentsItemsInput;
};
