import { Teams as TTeams } from "../api/teams/Teams";

export const TEAMS_TITLE_FIELD = "name";

export const TeamsTitle = (record: TTeams): string => {
  return record.name?.toString() || String(record.id);
};
