export const ROUTES = {
  LOGIN: { to: "/", path: "/" },
  ROUNDS: { to: "/rounds", path: "/rounds" },
  ROUND: {
    to: (params: { id: string }) => `/rounds/${params.id}`,
    path: "/rounds/:id",
  },
  NOT_FOUND: { to: "*", path: "/*" },
};
