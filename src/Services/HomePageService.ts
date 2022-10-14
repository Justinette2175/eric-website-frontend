import { EditorContent, HomePage } from "../Types";
import { AxiosInstance } from "./ApiService";

const HOME_PAGE_ROUTE = "/home-page";

export async function getHomePage(): Promise<HomePage> {
  const { data } = await AxiosInstance.get(HOME_PAGE_ROUTE);

  const attributes = data.data.attributes;
  const parsedContent = JSON.parse(attributes.content) as EditorContent;

  return {
    content: parsedContent,
    title: attributes.title as string,
  } as HomePage;
}
