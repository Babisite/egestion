import { JsonValue } from "type-fest";
import { Projects } from "../projects/Projects";

export type Tasks = {
  actualHours: number | null;
  checklist: JsonValue;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  estimatedHours: number | null;
  id: string;
  labels: string | null;
  priority: string | null;
  project?: Projects | null;
  recurringPattern: string | null;
  status: string | null;
  title: string | null;
  updatedAt: Date;
};
