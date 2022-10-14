import { useQuery, UseQueryResult } from "react-query";
import { RequestOptions } from "../Services/ApiService";
import { getPresses } from "../Services/PresseService";
import { Presse } from "../Types";
import { QueryId } from "./queryId";

export function usePressesQuery(
  options?: RequestOptions
): UseQueryResult<Presse[]> {
  return useQuery(
    [QueryId.presses, JSON.stringify(options).replaceAll('"', "")],
    async () => await getPresses(options)
  );
}
