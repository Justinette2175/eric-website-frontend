import { useQuery, UseQueryResult } from "react-query";

import { RequestOptions } from "../Services/ApiService";
import { getAVenirs } from "../Services/AVenirsService";
import { AVenir } from "../Types";
import { QueryId } from "./queryId";

export function useAVenirsQuery(
  options: RequestOptions
): UseQueryResult<AVenir[]> {
  return useQuery(
    [QueryId.aVenirs, JSON.stringify(options.filters)],
    async () => await getAVenirs(options)
  );
}
