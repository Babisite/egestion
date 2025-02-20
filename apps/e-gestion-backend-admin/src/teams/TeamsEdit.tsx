import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DepartmentsTitle } from "../departments/DepartmentsTitle";

export const TeamsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
