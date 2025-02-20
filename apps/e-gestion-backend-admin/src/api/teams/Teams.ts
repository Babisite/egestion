import { Departments } from "../departments/Departments";

export type Teams = {
  createdAt: Date;
  department?: Departments | null;
  id: string;
  name: string | null;
  teamLeader: string | null;
  updatedAt: Date;
};
