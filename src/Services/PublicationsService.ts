import { link } from "fs";
import qs from "qs";
import { Publication } from "../Types";

import { AxiosInstance, RequestOptions } from "./ApiService";

const PUBLICATIONS_ROUTE = "/publications";

export async function getPublications(
  options?: RequestOptions
): Promise<Publication[]> {
  const query = qs.stringify(options, {
    encodeValuesOnly: true
  });

  const { data } = await AxiosInstance.get(`${PUBLICATIONS_ROUTE}?${query}`);
  const publications = data.data as {
    id: string;
    attributes: {
      title?: string;
      description?: string;
      date?: string;
      link?: string;
    };
  }[];

  return publications.map((publication) => ({
    id: publication.id,
    title: publication.attributes.title,
    description: publication.attributes.description,
    date: publication.attributes.date,
    link: publication.attributes.link
  }));
}

export async function getPublicationById(id: string) {
  const response = await AxiosInstance.get(`${PUBLICATIONS_ROUTE}/${id}`);

  return response;
}
