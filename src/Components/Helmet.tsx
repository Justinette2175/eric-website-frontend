import { Helmet as ReactHelmet } from "react-helmet";

type HelmetProps = {
  title: string;
};

export function Helmet({ title }: HelmetProps) {
  return (
    <ReactHelmet>
      <title>{title}</title>
    </ReactHelmet>
  );
}
