import { useQuery, UseQueryResult } from "react-query";
import { getWebsiteInfo } from "../Services/WebsiteInfo.service";
import { WebsiteInfo } from "../Types";
import { QueryId } from "./queryId";

export function useWebsiteInfoQuery(): UseQueryResult<WebsiteInfo> {
  return useQuery([QueryId.websiteInfo], async () => await getWebsiteInfo());
}
