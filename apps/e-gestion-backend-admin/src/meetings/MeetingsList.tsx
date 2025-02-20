import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MeetingsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MeetingsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="meeting_date" source="meetingDate" />
        <TextField label="meeting_type" source="meetingType" />
        <TextField label="organizer" source="organizer" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
