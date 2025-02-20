import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DepartmentsTitle } from "../departments/DepartmentsTitle";

export const TeamsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="department.id"
          reference="Departments"
          label="department"
        >
          <SelectInput optionText={DepartmentsTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="team_leader" source="teamLeader" />
      </SimpleForm>
    </Create>
  );
};
