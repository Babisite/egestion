import { SortOrder } from "../../util/SortOrder";

export type MeetingsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  meetingDate?: SortOrder;
  meetingType?: SortOrder;
  organizer?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
