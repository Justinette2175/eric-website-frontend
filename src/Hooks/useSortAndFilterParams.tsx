import { useSearchParams } from "react-router-dom";
import { FRONT_END_ROUTES, getRoute } from "../Routes";

export enum SortParameter {
  date = "date",
  title = "title"
}

export enum SortOrder {
  desc = "desc",
  asc = "asc"
}

export const parameterToOrderMap = {
  [SortParameter.date]: SortOrder.desc,
  [SortParameter.title]: SortOrder.asc
};

export function makeUrlWithSortAndFilterParams({
  typeId,
  sortParameter,
  rootRoute
}: {
  rootRoute: FRONT_END_ROUTES;
  typeId?: string;
  sortParameter?: SortParameter;
}) {
  let queryString = "";
  if (typeId) {
    queryString += `type=${typeId}&`;
  }

  if (sortParameter) {
    queryString += `sortParameter=${sortParameter}&`;
  }

  return `${getRoute(rootRoute)}?${queryString}`;
}

export function useSortAndFilterParams({
  rootRoute
}: {
  rootRoute: FRONT_END_ROUTES;
}) {
  const [searchParams] = useSearchParams();
  const activeType = searchParams.get("type") || undefined;
  const activeSortParameter =
    (searchParams.get("sortParameter") as SortParameter) || SortParameter.title;

  const activeUrl = makeUrlWithSortAndFilterParams({
    typeId: activeType,
    sortParameter: activeSortParameter,
    rootRoute
  });

  return {
    activeType,
    activeSortParameter,
    activeUrl
  };
}
