import { useQuery, UseQueryResult } from "react-query";
import { RequestOptions } from "../Services/ApiService";
import { getPublications } from "../Services/PublicationsService";
import { Publication } from "../Types";
import { QueryId } from "./queryId";

export function usePublicationsQuery(
  options: RequestOptions
): UseQueryResult<Publication[]> {
  return useQuery(
    [QueryId.publications, JSON.stringify(options).replaceAll('"', "")],
    async () => await getPublications(options)
  );
}
