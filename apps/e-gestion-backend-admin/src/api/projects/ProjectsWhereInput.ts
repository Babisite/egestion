import { StringFilter } from "../../util/StringFilter";
import { TasksListRelationFilter } from "../tasks/TasksListRelationFilter";

export type ProjectsWhereInput = {
  id?: StringFilter;
  tasksItems?: TasksListRelationFilter;
};
