import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const MeetingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="location" source="location" />
        <DateTimeInput label="meeting_date" source="meetingDate" />
        <TextInput label="meeting_type" source="meetingType" />
        <TextInput label="organizer" source="organizer" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
