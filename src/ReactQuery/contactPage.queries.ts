import { useQuery, UseQueryResult } from "react-query";
import { getContactPage } from "../Services/ContactPageService";
import { ContactPage } from "../Types";
import { QueryId } from "./queryId";

export function useContactPageQuery(): UseQueryResult<ContactPage> {
  return useQuery([QueryId.constactPage], async () => await getContactPage());
}
