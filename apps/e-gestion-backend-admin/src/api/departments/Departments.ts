import { Teams } from "../teams/Teams";

export type Departments = {
  createdAt: Date;
  description: string | null;
  id: string;
  manager: string | null;
  name: string | null;
  teamsItems?: Array<Teams>;
  updatedAt: Date;
};
