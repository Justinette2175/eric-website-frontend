import { PublicationType } from "../Types";
import { AxiosInstance } from "./ApiService";

const PUBLICATION_TYPES_ROUTE = "/publication-types";

export async function getPublicationTypes(): Promise<PublicationType[]> {
  const { data } = await AxiosInstance.get(`${PUBLICATION_TYPES_ROUTE}`);
  const publicationTypes = data.data as {
    id: string;
    attributes: { name: string };
  }[];
  return publicationTypes.map((type) => ({
    id: type.id,
    name: type.attributes.name,
  }));
}
