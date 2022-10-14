import { AnArchive } from "../../Types";
import { Date, DateFormat } from "../Date";
import { Link } from "../Link";
import { Link as RouterLink } from "react-router-dom";

type AnArchivePreviewProps = {
  anArchive: AnArchive;
  linkTo?: string;
};

export function AnArchivePreview({ anArchive, linkTo }: AnArchivePreviewProps) {
  const content = (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <h3 className=" font-semibold">{anArchive.title}</h3>
          {anArchive.link && (
            <div className="ml-2">
              <Link externalUrl={anArchive.link} />
            </div>
          )}
        </div>
        {anArchive.date && (
          <Date date={anArchive.date} format={DateFormat.year} />
        )}
      </div>
      {anArchive.description && <p className="">{anArchive.description}</p>}
    </div>
  );

  if (linkTo) {
    return <RouterLink to={linkTo}>{content}</RouterLink>;
  }

  return content;
}
