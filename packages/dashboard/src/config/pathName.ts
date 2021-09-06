const pathName = {
  app: {
    index: "/",
    home: "/app",
    list: "/app/list",
    listCreate: "/app/list/create",
    listUpdate: "/app/list/:id",
    calendar: "/app/calendar",
    settings: "/app/settings",
  },
  api: {
    sessions: {
      root: "/sessions",
      refreshToken: "/sessions/refresh",
    },
    users: {
      root: "/users",
      profile: "/users/me",
      avatar: "/users/avatar",
      resetPassword: "/users/reset-password",
      forgotPassword: "/users/forgot-password",
    },
    settings: {
      root: "/settings",
    },
  },
};

export default pathName;
