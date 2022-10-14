import React from "react";
import { BlockDisplayer } from "../Components/BlocksDisplayer";
import { PageLayout } from "../Components/PageLayout";
import { AVenirPreview } from "../Components/Previews/AVenir.preview";
import { useAVenirsQuery } from "../ReactQuery/aVenirs.queries";
import { useHomePageQuery } from "../ReactQuery/homePage.queries";

export function HomePage() {
  const { data } = useHomePageQuery();
  const { data: aVenirs } = useAVenirsQuery({});

  return (
    <PageLayout title={data?.title}>
      <div className="grid grid-flow-row gap-8">
        {data?.content && <BlockDisplayer blocks={data.content.blocks} />}
        <div className="grid grid-cols-2 gap-4">
          {aVenirs?.map((aVenir) => (
            <AVenirPreview key={`a-venir-${aVenir.id}`} aVenir={aVenir} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
