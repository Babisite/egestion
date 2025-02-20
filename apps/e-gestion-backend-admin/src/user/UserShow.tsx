import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="age" source="age" />
        <TextField label="bank_details" source="bankDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="department" source="department" />
        <TextField label="documents" source="documents" />
        <TextField label="Email" source="email" />
        <TextField label="emergency_contact" source="emergencyContact" />
        <TextField label="First Name" source="firstName" />
        <TextField label="firstname" source="firstname" />
        <TextField label="hire_date" source="hireDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_active" source="isActive" />
        <TextField label="last_login_date" source="lastLoginDate" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="lastname" source="lastname" />
        <TextField
          label="notification_preferences"
          source="notificationPreferences"
        />
        <TextField label="phone_number" source="phoneNumber" />
        <TextField label="preferences" source="preferences" />
        <TextField label="profile_picture_url" source="profilePictureUrl" />
        <TextField label="role" source="role" />
        <TextField label="Roles" source="roles" />
        <TextField label="security_clearance" source="securityClearance" />
        <TextField label="skills" source="skills" />
        <TextField label="social_links" source="socialLinks" />
        <TextField label="status" source="status" />
        <TextField label="theme_preference" source="themePreference" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="vacation_days" source="vacationDays" />
        <TextField label="working_hours" source="workingHours" />
        <TextField label="workspace_settings" source="workspaceSettings" />
      </SimpleShowLayout>
    </Show>
  );
};
