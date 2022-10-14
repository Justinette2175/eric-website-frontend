import { FiDownload } from "react-icons/fi";

type LinkProps = {
  url?: string;
};

export function Link({ url }: LinkProps) {
  return (
    <a href={url} download>
      <FiDownload size={16} />
    </a>
  );
}
