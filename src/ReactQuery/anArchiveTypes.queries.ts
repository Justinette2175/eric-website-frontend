import { useQuery, UseQueryResult } from "react-query";
import { getAnArchiveTypes } from "../Services/AnArchiveTypes.service";
import { AnArchiveType } from "../Types";

import { QueryId } from "./queryId";

export function useAnArchiveTypesQuery(): UseQueryResult<AnArchiveType[]> {
  return useQuery(
    [QueryId.anArchiveTypes],
    async () => await getAnArchiveTypes()
  );
}
