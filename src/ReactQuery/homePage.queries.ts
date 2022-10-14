import { useQuery, UseQueryResult } from "react-query";
import { getHomePage } from "../Services/HomePageService";
import { HomePage } from "../Types";

import { QueryId } from "./queryId";

export function useHomePageQuery(): UseQueryResult<HomePage> {
  return useQuery([QueryId.homePage], async () => await getHomePage());
}
