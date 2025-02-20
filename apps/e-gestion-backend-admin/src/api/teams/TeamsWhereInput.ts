import { DepartmentsWhereUniqueInput } from "../departments/DepartmentsWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TeamsWhereInput = {
  department?: DepartmentsWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  teamLeader?: StringNullableFilter;
};
