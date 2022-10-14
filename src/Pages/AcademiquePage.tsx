import React from "react";
import { BlockDisplayer } from "../Components/BlocksDisplayer";
import { PageLayout } from "../Components/PageLayout";
import { useAcademiquePageQuery } from "../ReactQuery/academiquePage.queries";

export function AcademiquePage() {
  const { data } = useAcademiquePageQuery();

  return (
    <PageLayout title={data?.title}>
      {data?.content && <BlockDisplayer blocks={data.content.blocks} />}
    </PageLayout>
  );
}
