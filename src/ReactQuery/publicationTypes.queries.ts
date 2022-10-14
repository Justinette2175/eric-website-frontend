import { useQuery, UseQueryResult } from "react-query";
import { getPublicationTypes } from "../Services/PublicationTypes.service";
import { PublicationType } from "../Types";

import { QueryId } from "./queryId";

export function usePublicationTypesQuery(): UseQueryResult<PublicationType[]> {
  return useQuery(
    [QueryId.publicationTypes],
    async () => await getPublicationTypes()
  );
}
