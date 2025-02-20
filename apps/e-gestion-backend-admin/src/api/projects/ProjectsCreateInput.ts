import { TasksCreateNestedManyWithoutProjectsItemsInput } from "./TasksCreateNestedManyWithoutProjectsItemsInput";

export type ProjectsCreateInput = {
  tasksItems?: TasksCreateNestedManyWithoutProjectsItemsInput;
};
