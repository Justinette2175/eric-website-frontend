import { FormEvent, useCallback, useEffect, useState } from "react";
import { useSendEmailMutation } from "../ReactQuery/email.mutations";
import { Button } from "./Button";

type ContactFormProps = {
  buttonText?: string;
  confirmationMessage?: string;
};

export function ContactForm({
  confirmationMessage,
  buttonText,
}: ContactFormProps) {
  const [senderEmail, setSenderEmail] = useState<string>("");
  const [senderName, setSenderName] = useState<string>("");
  const [senderMessage, setSenderMessage] = useState<string>("");

  const sendEmailMutation = useSendEmailMutation();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      sendEmailMutation.mutate({ senderEmail, senderMessage, senderName });
      e.preventDefault();
    },
    [sendEmailMutation, senderEmail, senderMessage, senderName]
  );

  useEffect(() => {
    if (sendEmailMutation.isSuccess) {
      setSenderEmail("");
      setSenderName("");
      setSenderMessage("");
    }
  }, [sendEmailMutation.isSuccess]);

  const disabled = !senderEmail || !senderName || !senderMessage;

  return sendEmailMutation.isSuccess ? (
    <div className="grid grid-flow-row gap-4">
      <p>{confirmationMessage}</p>

      <div>
        <Button onClick={() => sendEmailMutation.reset()}>
          Envoyer un autre message
        </Button>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-flow-row gap-4">
        <div className="flex -m-2">
          <div className="p-2 w-full">
            <label htmlFor="nom" className="block">
              Nom
            </label>
            <input
              className="w-full p-2 mt-2 bg-gray-100 rounded-sm"
              type="text"
              id="nom"
              name="nom"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          </div>

          <div className="p-2 w-full">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              className="w-full p-2 mt-2  bg-gray-100 rounded-sm"
              type="email"
              name="email"
              id="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="message">Votre message</label>
          <textarea
            className="w-full p-2 mt-2 resize-none h-44 rounded-sm bg-gray-100"
            id="message"
            name="message"
            value={senderMessage}
            onChange={(e) => setSenderMessage(e.target.value)}
          />
        </div>

        <div>
          <Button disabled={disabled} type="submit">
            {buttonText}
          </Button>
        </div>
      </div>
    </form>
  );
}
