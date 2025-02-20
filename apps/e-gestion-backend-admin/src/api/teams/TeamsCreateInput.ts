import { DepartmentsWhereUniqueInput } from "../departments/DepartmentsWhereUniqueInput";

export type TeamsCreateInput = {
  department?: DepartmentsWhereUniqueInput | null;
  name?: string | null;
  teamLeader?: string | null;
};
