import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROJECTS_TITLE_FIELD } from "../projects/ProjectsTitle";

export const TasksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TasksItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actual_hours" source="actualHours" />
        <TextField label="checklist" source="checklist" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="due_date" source="dueDate" />
        <TextField label="estimated_hours" source="estimatedHours" />
        <TextField label="ID" source="id" />
        <TextField label="labels" source="labels" />
        <TextField label="priority" source="priority" />
        <ReferenceField
          label="project"
          source="projects.id"
          reference="Projects"
        >
          <TextField source={PROJECTS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="recurring_pattern" source="recurringPattern" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
