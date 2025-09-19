export const getTabName = (path: string) => {
  if (path === "/") {
    return "ВОЙТИ";
  }

  if (path === "/rounds") {
    return "СПИСОК РАУНДОВ";
  }

  if (/^\/rounds\/\d+$/.test(path)) {
    return "РАУНД";
  }

  if (path === "/bonus") {
    return "БОНУС";
  }

  return "ЧТО ВЫ ЗДЕСЬ ДЕЛАЕТЕ?";
};
