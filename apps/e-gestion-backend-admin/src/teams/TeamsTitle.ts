import { Teams as TTeams } from "../api/teams/Teams";

export const TEAMS_TITLE_FIELD = "id";

export const TeamsTitle = (record: TTeams): string => {
  return record.id?.toString() || String(record.id);
};
