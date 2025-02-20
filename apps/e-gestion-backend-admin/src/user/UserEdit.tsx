import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="age" source="age" />
        <div />
        <TextInput label="department" source="department" />
        <div />
        <TextInput label="Email" source="email" type="email" />
        <div />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="firstname" source="firstname" />
        <DateTimeInput label="hire_date" source="hireDate" />
        <BooleanInput label="is_active" source="isActive" />
        <DateTimeInput label="last_login_date" source="lastLoginDate" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="lastname" source="lastname" />
        <div />
        <PasswordInput label="Password" source="password" />
        <TextInput label="phone_number" source="phoneNumber" />
        <div />
        <TextInput label="profile_picture_url" source="profilePictureUrl" />
        <TextInput label="role" source="role" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="security_clearance" source="securityClearance" />
        <SelectArrayInput
          label="skills"
          source="skills"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <div />
        <TextInput label="status" source="status" />
        <SelectInput
          source="themePreference"
          label="theme_preference"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <NumberInput step={1} label="vacation_days" source="vacationDays" />
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
