import { AcademiquePage, EditorContent } from "../Types";
import { AxiosInstance } from "./ApiService";

const ACADEMIQUE_PAGE_ROUTE = "/academique-page";

export async function getAcademiquePage(): Promise<AcademiquePage> {
  const { data } = await AxiosInstance.get(ACADEMIQUE_PAGE_ROUTE);

  const attributes = data.data.attributes;
  const parsedContent = JSON.parse(attributes.content) as EditorContent;

  return {
    content: parsedContent,
    title: attributes.title as string,
  } as AcademiquePage;
}
