import { TeamsWhereInput } from "./TeamsWhereInput";
import { TeamsOrderByInput } from "./TeamsOrderByInput";

export type TeamsFindManyArgs = {
  where?: TeamsWhereInput;
  orderBy?: Array<TeamsOrderByInput>;
  skip?: number;
  take?: number;
};
