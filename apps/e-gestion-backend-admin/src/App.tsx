import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DepartmentsList } from "./departments/DepartmentsList";
import { DepartmentsCreate } from "./departments/DepartmentsCreate";
import { DepartmentsEdit } from "./departments/DepartmentsEdit";
import { DepartmentsShow } from "./departments/DepartmentsShow";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { SkillsList } from "./skills/SkillsList";
import { SkillsCreate } from "./skills/SkillsCreate";
import { SkillsEdit } from "./skills/SkillsEdit";
import { SkillsShow } from "./skills/SkillsShow";
import { TeamsList } from "./teams/TeamsList";
import { TeamsCreate } from "./teams/TeamsCreate";
import { TeamsEdit } from "./teams/TeamsEdit";
import { TeamsShow } from "./teams/TeamsShow";
import { TasksList } from "./tasks/TasksList";
import { TasksCreate } from "./tasks/TasksCreate";
import { TasksEdit } from "./tasks/TasksEdit";
import { TasksShow } from "./tasks/TasksShow";
import { MeetingsList } from "./meetings/MeetingsList";
import { MeetingsCreate } from "./meetings/MeetingsCreate";
import { MeetingsEdit } from "./meetings/MeetingsEdit";
import { MeetingsShow } from "./meetings/MeetingsShow";
import { ResourcesList } from "./resources/ResourcesList";
import { ResourcesCreate } from "./resources/ResourcesCreate";
import { ResourcesEdit } from "./resources/ResourcesEdit";
import { ResourcesShow } from "./resources/ResourcesShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"E-Gestion Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Departments"
          list={DepartmentsList}
          edit={DepartmentsEdit}
          create={DepartmentsCreate}
          show={DepartmentsShow}
        />
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="Skills"
          list={SkillsList}
          edit={SkillsEdit}
          create={SkillsCreate}
          show={SkillsShow}
        />
        <Resource
          name="Teams"
          list={TeamsList}
          edit={TeamsEdit}
          create={TeamsCreate}
          show={TeamsShow}
        />
        <Resource
          name="Tasks"
          list={TasksList}
          edit={TasksEdit}
          create={TasksCreate}
          show={TasksShow}
        />
        <Resource
          name="Meetings"
          list={MeetingsList}
          edit={MeetingsEdit}
          create={MeetingsCreate}
          show={MeetingsShow}
        />
        <Resource
          name="Resources"
          list={ResourcesList}
          edit={ResourcesEdit}
          create={ResourcesCreate}
          show={ResourcesShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
