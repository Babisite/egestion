import { DepartmentsWhereUniqueInput } from "../departments/DepartmentsWhereUniqueInput";

export type TeamsUpdateInput = {
  department?: DepartmentsWhereUniqueInput | null;
  name?: string | null;
  teamLeader?: string | null;
};
