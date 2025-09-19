export const ROUTES = {
  LOGIN: { to: "/", path: "/" },
  ROUNDS: { to: "/rounds", path: "/rounds" },
  BONUS: { to: "/bonus", path: "/bonus" },
  ROUND: {
    to: (params: { id: string }) => `/rounds/${params.id}`,
    path: "/rounds/:id",
  },
  NOT_FOUND: { to: "*", path: "/*" },
};
