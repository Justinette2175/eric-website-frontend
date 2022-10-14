import { Publication } from "../../Types";
import { Date, DateFormat } from "../Date";
import { Link } from "../Link";

type PublicationPreviewProps = {
  publication: Publication;
};

export function PublicationPreview({ publication }: PublicationPreviewProps) {
  console.log("publication", publication);
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <h3 className=" font-semibold">{publication.title}</h3>
          {publication.link && (
            <div className="ml-2">
              <Link externalUrl={publication.link} />
            </div>
          )}
        </div>
        {publication.date && (
          <Date date={publication.date} format={DateFormat.year} />
        )}
      </div>
      {publication.description && <p className="">{publication.description}</p>}
    </div>
  );
}
