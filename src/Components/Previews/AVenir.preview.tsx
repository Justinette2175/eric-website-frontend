import { AVenir } from "../../Types";

type AVenirPreviewProps = {
  aVenir: AVenir;
};

export function AVenirPreview({ aVenir }: AVenirPreviewProps) {
  return (
    <div>
      <p>{aVenir.title}</p>
      <p>{aVenir.description}</p>
      <p>{aVenir.date}</p>
    </div>
  );
}
