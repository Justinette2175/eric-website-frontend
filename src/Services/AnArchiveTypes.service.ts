import { AnArchiveType } from "../Types";
import { AxiosInstance } from "./ApiService";

const AN_ARCHIVE_TYPES_ROUTE = "/an-archive-types";

export async function getAnArchiveTypes(): Promise<AnArchiveType[]> {
  const { data } = await AxiosInstance.get(`${AN_ARCHIVE_TYPES_ROUTE}`);
  const anArchiveTypes = data.data as {
    id: string;
    attributes: { name: string };
  }[];
  return anArchiveTypes.map((type) => ({
    id: type.id,
    name: type.attributes.name
  }));
}
