import { FiPaperclip } from "react-icons/fi";

type LinkProps = {
  localUrl?: string;
  externalUrl?: string;
};

export function Link({ externalUrl }: LinkProps) {
  return (
    <a href={externalUrl} target="_blank" rel="noreferrer noopener">
      <FiPaperclip size={16} />
    </a>
  );
}
