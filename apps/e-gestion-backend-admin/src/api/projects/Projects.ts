import { Tasks } from "../tasks/Tasks";

export type Projects = {
  createdAt: Date;
  id: string;
  tasksItems?: Array<Tasks>;
  updatedAt: Date;
};
