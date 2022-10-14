export enum FRONT_END_ROUTES {
  home = "/",
  publications = "/publications",
  anArchives = "/an-archives",
  presse = "/presse",
  contact = "/contact",
  academique = "/academique"
}

export function getRoute(route: FRONT_END_ROUTES) {
  if (process.env.NODE_ENV === "development") {
    return route;
  } else {
    return `/j_gagnep/ericletourneau${route}`;
  }
}
