import { Publication } from "../../Types";

type PublicationPreviewProps = {
  publication: Publication;
};

export function PublicationPreview({ publication }: PublicationPreviewProps) {
  return (
    <div className="flex justify-between">
      <div>
        <p>{publication.title}</p>
        {publication.description && <p>{publication.description}</p>}
      </div>
      <div>
        <p>{publication.date}</p>
      </div>
    </div>
  );
}
