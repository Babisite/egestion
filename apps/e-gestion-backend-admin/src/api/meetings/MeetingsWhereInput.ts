import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MeetingsWhereInput = {
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  meetingDate?: DateTimeNullableFilter;
  meetingType?: StringNullableFilter;
  organizer?: StringNullableFilter;
  title?: StringNullableFilter;
};
