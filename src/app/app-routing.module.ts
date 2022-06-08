import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './Config/appRoutes';
import { AppGuard } from './Framework/API/app.guard';
import { ChatOverviewComponent } from './Pages/chat/chat-overview/chat-overview.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { GradesComponent } from './Pages/grades/grades.component';
import { LoginComponent } from './Pages/login/login.component';
import { TimetableComponent } from './Pages/timetable/timetable.component';
import {UserSettingsComponent} from "./Pages/user-settings/user-settings.component";

const routes: Routes = [
  { path: '', redirectTo: `/${appRoutes.Login}`, pathMatch: 'full' },
  { path: appRoutes.App, redirectTo: `/${appRoutes.App}/${appRoutes.Dashboard}`, pathMatch: 'full' },
  { path: appRoutes.Login, component: LoginComponent },
  {
    path: appRoutes.App,
    canActivate: [AppGuard],
    children: [
      { path: appRoutes.Dashboard, component: DashboardComponent },
      { path: appRoutes.Grades, component: GradesComponent },
      { path: appRoutes.Timetable, component: TimetableComponent },
      { path: appRoutes.Chat, component: ChatOverviewComponent },
      { path: appRoutes.UserSettings, component: UserSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
