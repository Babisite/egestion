import { TeamsWhereUniqueInput } from "./TeamsWhereUniqueInput";
import { TeamsUpdateInput } from "./TeamsUpdateInput";

export type UpdateTeamsArgs = {
  where: TeamsWhereUniqueInput;
  data: TeamsUpdateInput;
};
