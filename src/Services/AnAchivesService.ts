import qs from "qs";
import { AnArchive, EditorContent } from "../Types";

import { AxiosInstance, RequestOptions } from "./ApiService";

const AN_ARCHIVE_ROUTE = "/an-archives";

type ServerAnArchive = {
  id: string;
  attributes: {
    title?: string;
    description?: string;
    date?: string;
    content?: string;
    externalLink?: string;
    file?: string;
  };
};

function serverAnArchiveToAnArchive(anArchive: ServerAnArchive) {
  const parsedContent = anArchive.attributes?.content
    ? (JSON.parse(anArchive.attributes.content) as EditorContent)
    : undefined;

  return {
    id: anArchive.id,
    title: anArchive.attributes.title,
    description: anArchive.attributes.description,
    date: anArchive.attributes.date,
    content: parsedContent,
    externalLink: anArchive.attributes.externalLink,
    file: anArchive.attributes.file
  };
}

export async function getAnArchives(
  options?: RequestOptions
): Promise<AnArchive[]> {
  const query = qs.stringify(options, {
    encodeValuesOnly: true
  });

  console.log("query", query);

  const { data } = await AxiosInstance.get(`${AN_ARCHIVE_ROUTE}?${query}`);
  const anArchives = data.data as ServerAnArchive[];

  return anArchives.map(serverAnArchiveToAnArchive);
}

export async function getAnArchiveById(id: string) {
  const { data } = await AxiosInstance.get(`${AN_ARCHIVE_ROUTE}/${id}`);
  const anArchive = data.data as ServerAnArchive;
  return serverAnArchiveToAnArchive(anArchive);
}
