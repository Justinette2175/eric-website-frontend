import React from "react";
import { FilterMenu } from "../Components/FilterMenu";

import { PageLayout } from "../Components/PageLayout";
import { PressePreview } from "../Components/Previews/Presse.preview";
import {
  makeUrlWithSortAndFilterParams,
  parameterToOrderMap,
  SortParameter,
  useSortAndFilterParams
} from "../Hooks/useSortAndFilterParams";
import { usePressesQuery } from "../ReactQuery/presses.queries";
import { FRONT_END_ROUTES } from "../Routes";

export function PressePage(): React.ReactElement {
  const rootRoute = FRONT_END_ROUTES.presse;
  const { activeSortParameter, activeType, activeUrl } = useSortAndFilterParams(
    { rootRoute }
  );
  const { data: presses } = usePressesQuery({
    sort: {
      [activeSortParameter]: parameterToOrderMap[activeSortParameter]
    }
  });

  return (
    <PageLayout title="Presse">
      <div className="grid grid-flow-row gap-8">
        <div>
          <FilterMenu
            menuLabel="Ordonner par"
            menuItems={[
              {
                label: "Titre",
                to: makeUrlWithSortAndFilterParams({
                  typeId: activeType,
                  sortParameter: SortParameter.title,
                  rootRoute
                })
              },
              {
                label: "Année",
                to: makeUrlWithSortAndFilterParams({
                  typeId: activeType,
                  sortParameter: SortParameter.date,
                  rootRoute
                })
              }
            ]}
            activeTo={activeUrl}
          />
        </div>
        <div className="grid grid-flow-row gap-4">
          {presses?.map((presse) => (
            <PressePreview presse={presse} key={presse.id} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
