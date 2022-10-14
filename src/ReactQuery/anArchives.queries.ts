import { useQuery, UseQueryResult } from "react-query";
import { getAnArchiveById, getAnArchives } from "../Services/AnAchivesService";
import { RequestOptions } from "../Services/ApiService";
import { AnArchive } from "../Types";
import { QueryId } from "./queryId";

export function useAnArchivesQuery(
  options: RequestOptions
): UseQueryResult<AnArchive[]> {
  console.log("request options", options);
  return useQuery(
    [QueryId.anArchives, JSON.stringify(options).replaceAll('"', "")],
    async () => await getAnArchives(options)
  );
}

export function useAnArchiveQuery(id: string): UseQueryResult<AnArchive> {
  return useQuery(
    [QueryId.anArchive, id],
    async () => await getAnArchiveById(id)
  );
}
