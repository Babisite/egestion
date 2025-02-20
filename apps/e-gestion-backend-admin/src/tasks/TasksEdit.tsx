import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProjectsTitle } from "../projects/ProjectsTitle";

export const TasksEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="actual_hours" source="actualHours" />
        <div />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="due_date" source="dueDate" />
        <NumberInput label="estimated_hours" source="estimatedHours" />
        <TextInput label="labels" multiline source="labels" />
        <TextInput label="priority" source="priority" />
        <ReferenceInput
          source="project.id"
          reference="Projects"
          label="project"
        >
          <SelectInput optionText={ProjectsTitle} />
        </ReferenceInput>
        <TextInput label="recurring_pattern" source="recurringPattern" />
        <TextInput label="status" source="status" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
