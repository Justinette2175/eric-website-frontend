import { Presse } from "../../Types";
import { Date } from "../Date";
import { Link } from "../Link";

type PressePreviewProps = {
  presse: Presse;
};

export function PressePreview({ presse }: PressePreviewProps) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <h3 className=" font-semibold">{presse.title}</h3>
          {presse.link && (
            <div className="ml-2">
              <Link externalUrl={presse.link} />
            </div>
          )}
        </div>
        {presse.date && <Date date={presse.date} />}
      </div>
      <p className="text-sm mb-1 text-slate-500">{presse.outlet}</p>
      {presse.description && <p className="">{presse.description}</p>}
    </div>
  );
}
