import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type TasksWhereInput = {
  actualHours?: FloatNullableFilter;
  checklist?: JsonFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  estimatedHours?: FloatNullableFilter;
  id?: StringFilter;
  labels?: StringNullableFilter;
  priority?: StringNullableFilter;
  project?: ProjectsWhereUniqueInput;
  recurringPattern?: StringNullableFilter;
  status?: StringNullableFilter;
  title?: StringNullableFilter;
};
