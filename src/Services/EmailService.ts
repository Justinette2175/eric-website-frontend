import { EmailParameters } from "../Types";
import { AxiosInstance } from "./ApiService";

const EMAIL_ROUTE = "/email";

export async function sendEmail({
  senderEmail,
  senderName,
  senderMessage,
}: EmailParameters) {
  return AxiosInstance.post(EMAIL_ROUTE, {
    senderEmail,
    senderName,
    senderMessage,
  });
}
