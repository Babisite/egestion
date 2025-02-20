import { InputJsonValue } from "../../types";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type TasksUpdateInput = {
  actualHours?: number | null;
  checklist?: InputJsonValue;
  description?: string | null;
  dueDate?: Date | null;
  estimatedHours?: number | null;
  labels?: string | null;
  priority?: string | null;
  project?: ProjectsWhereUniqueInput | null;
  recurringPattern?: string | null;
  status?: string | null;
  title?: string | null;
};
