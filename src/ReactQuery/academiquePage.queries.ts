import { useQuery, UseQueryResult } from "react-query";
import { getAcademiquePage } from "../Services/AcademiquePageService";
import { AcademiquePage } from "../Types";

import { QueryId } from "./queryId";

export function useAcademiquePageQuery(): UseQueryResult<AcademiquePage> {
  return useQuery([QueryId.homePage], async () => await getAcademiquePage());
}
