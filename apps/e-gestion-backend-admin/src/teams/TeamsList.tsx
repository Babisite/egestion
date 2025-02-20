import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPARTMENTS_TITLE_FIELD } from "../departments/DepartmentsTitle";

export const TeamsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TeamsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="department"
          source="departments.id"
          reference="Departments"
        >
          <TextField source={DEPARTMENTS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="team_leader" source="teamLeader" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
