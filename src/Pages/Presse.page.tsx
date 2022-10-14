import React from "react";

import { PageLayout } from "../Components/PageLayout";
import { PressePreview } from "../Components/Previews/Presse.preview";
import { usePressesQuery } from "../ReactQuery/presses.queries";

export function PressePage(): React.ReactElement {
  const { data: presses } = usePressesQuery();

  return (
    <PageLayout title="Presse">
      <div className="grid grid-flow-row gap-8">
        <div className="grid grid-flow-row gap-4">
          {presses?.map((presse) => (
            <PressePreview presse={presse} key={presse.id} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
