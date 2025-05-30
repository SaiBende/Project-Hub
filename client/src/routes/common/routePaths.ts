export const isAuthRoute = (pathname: string): boolean => {
  return Object.values(AUTH_ROUTES).includes(pathname);
};

export const AUTH_ROUTES = {
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  GOOGLE_OAUTH_CALLBACK: "/auth/google/oauth/callback",
};
export const LANDING_ROUTES = {
  LANDING: "/",
};
export const PROTECTED_ROUTES = {
  WORKSPACE: "/workspace/:workspaceId",
  TASKS: "/workspace/:workspaceId/tasks",
  MEMBERS: "/workspace/:workspaceId/members",
  SETTINGS: "/workspace/:workspaceId/settings",
  PROJECT_DETAILS: "/workspace/:workspaceId/project/:projectId",
  KANBAN: "/workspace/:workspaceId/kanban",
  CALENDAR: "/workspace/:workspaceId/calendar",
  GITHUB :"/workspace/:workspaceId/github"
};

export const BASE_ROUTE = {
  INVITE_URL: "/invite/workspace/:inviteCode/join",
};
