import { Resources as TResources } from "../api/resources/Resources";

export const RESOURCES_TITLE_FIELD = "id";

export const ResourcesTitle = (record: TResources): string => {
  return record.id?.toString() || String(record.id);
};
