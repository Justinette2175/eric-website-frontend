import { ContactPage, EditorContent } from "../Types";
import { AxiosInstance } from "./ApiService";

const CONTACT_PAGE_ROUTE = "/contact-page";

export async function getContactPage(): Promise<ContactPage> {
  const { data } = await AxiosInstance.get(CONTACT_PAGE_ROUTE);

  const attributes = data.data.attributes;
  const parsedContent = JSON.parse(attributes.content) as EditorContent;

  return {
    content: parsedContent,
    title: attributes.title as string,
    confirmationEnvoi: attributes.confirmationEnvoi,
    messageBouton: attributes.messageBouton,
  } as ContactPage;
}
