import qs from "qs";
import { Presse } from "../Types";

import { AxiosInstance, RequestOptions } from "./ApiService";

const PRESS_ROUTE = "/presses";

export async function getPresses(options?: RequestOptions): Promise<Presse[]> {
  const query = qs.stringify(options, {
    encodeValuesOnly: true,
  });

  const { data } = await AxiosInstance.get(`${PRESS_ROUTE}?${query}`);
  const presses = data.data as {
    id: string;
    attributes: {
      title?: string;
      description?: string;
      date?: string;
      link?: string;
      outlet?: string;
    };
  }[];

  return presses.map((presse) => ({
    id: presse.id,
    title: presse.attributes.title,
    description: presse.attributes.description,
    date: presse.attributes.date,
    link: presse.attributes.link,
    outlet: presse.attributes.outlet,
  }));
}

export async function getPresseById(id: string) {
  const response = await AxiosInstance.get(`${PRESS_ROUTE}/${id}`);

  return response;
}
