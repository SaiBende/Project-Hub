import GoogleOAuthFailure from "@/page/auth/GoogleOAuthFailure";
import SignIn from "@/page/auth/Sign-in";
import SignUp from "@/page/auth/Sign-up";
import WorkspaceDashboard from "@/page/workspace/Dashboard";
import Members from "@/page/workspace/Members";
import ProjectDetails from "@/page/workspace/ProjectDetails";
import Settings from "@/page/workspace/Settings";
import Tasks from "@/page/workspace/Tasks";
import Kanban from "@/page/workspace/Kanban";
import Calendar from "@/page/workspace/Calendar";
import LandingPage from "@/page/landing/Landing";
import { AUTH_ROUTES, BASE_ROUTE, LANDING_ROUTES, PROTECTED_ROUTES } from "./routePaths";
import InviteUser from "@/page/invite/InviteUser";
import Github from "@/page/workspace/Github";


export const authenticationRoutePaths = [
  { path: AUTH_ROUTES.SIGN_IN, element: <SignIn /> },
  { path: AUTH_ROUTES.SIGN_UP, element: <SignUp /> },
  { path: AUTH_ROUTES.GOOGLE_OAUTH_CALLBACK, element: <GoogleOAuthFailure /> },
   
];

export const protectedRoutePaths = [
  { path: PROTECTED_ROUTES.WORKSPACE, element: <WorkspaceDashboard /> },
  { path: PROTECTED_ROUTES.TASKS, element: <Tasks /> },
  { path: PROTECTED_ROUTES.MEMBERS, element: <Members /> },
  { path: PROTECTED_ROUTES.SETTINGS, element: <Settings /> },
  { path: PROTECTED_ROUTES.PROJECT_DETAILS, element: <ProjectDetails /> },
  { path: PROTECTED_ROUTES.KANBAN, element: <Kanban /> },
  { path: PROTECTED_ROUTES.CALENDAR, element: <Calendar /> },
  { path: PROTECTED_ROUTES.GITHUB, element : <Github/>}
  
];

export const LandingRoutePaths = [
  { path: LANDING_ROUTES.LANDING, element: <LandingPage /> },
];

export const baseRoutePaths = [
  { path: BASE_ROUTE.INVITE_URL, element: <InviteUser /> },
];
