import { Departments as TDepartments } from "../api/departments/Departments";

export const DEPARTMENTS_TITLE_FIELD = "id";

export const DepartmentsTitle = (record: TDepartments): string => {
  return record.id?.toString() || String(record.id);
};
