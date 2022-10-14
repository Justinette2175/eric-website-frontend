import qs from "qs";
import { AVenir, EditorContent } from "../Types";

import { AxiosInstance, RequestOptions } from "./ApiService";

const A_VENIR_ROUTE = "/a-venirs";

export async function getAVenirs(options?: RequestOptions): Promise<AVenir[]> {
  const query = qs.stringify(options, {
    encodeValuesOnly: true
  });

  const { data } = await AxiosInstance.get(`${A_VENIR_ROUTE}?${query}`);
  const aVenirs = data.data as {
    id: string;
    attributes: {
      title?: string;
      description?: string;
      date?: string;
      coverImage?: string;
      content?: string;
    };
  }[];

  return aVenirs.map((aVenir) => {
    const parsedContent = aVenir.attributes?.content
      ? (JSON.parse(aVenir.attributes.content) as EditorContent)
      : undefined;
    return {
      id: aVenir.id,
      title: aVenir.attributes.title,
      description: aVenir.attributes.description,
      date: aVenir.attributes.date,
      content: parsedContent,
      coverImage: aVenir.attributes.coverImage
    };
  });
}
