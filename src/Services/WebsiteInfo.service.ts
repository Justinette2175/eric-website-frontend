import { WebsiteInfo } from "../Types";
import { AxiosInstance } from "./ApiService";

const WEBSITE_INFO_ROUTE = "/website-info";

export async function getWebsiteInfo(): Promise<WebsiteInfo> {
  const { data } = await AxiosInstance.get(WEBSITE_INFO_ROUTE);

  return data.data.attributes as WebsiteInfo;
}
