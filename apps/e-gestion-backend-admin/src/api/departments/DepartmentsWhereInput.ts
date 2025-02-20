import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamsListRelationFilter } from "../teams/TeamsListRelationFilter";

export type DepartmentsWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
  name?: StringNullableFilter;
  teamsItems?: TeamsListRelationFilter;
};
