import React from "react";
import { FilterMenu } from "../Components/FilterMenu";
import { PageLayout } from "../Components/PageLayout";
import { PublicationPreview } from "../Components/Previews/Publication.preview";
import {
  makeUrlWithSortAndFilterParams,
  parameterToOrderMap,
  SortParameter,
  useSortAndFilterParams
} from "../Hooks/useSortAndFilterParams";
import { usePublicationsQuery } from "../ReactQuery/publications.queries";
import { usePublicationTypesQuery } from "../ReactQuery/publicationTypes.queries";
import { FRONT_END_ROUTES } from "../Routes";

export function PublicationsPage(): React.ReactElement {
  const rootRoute = FRONT_END_ROUTES.publications;
  const { activeSortParameter, activeType, activeUrl } = useSortAndFilterParams(
    { rootRoute }
  );

  const { data: publicationTypes } = usePublicationTypesQuery();

  const { data: publications } = usePublicationsQuery({
    ...(activeType
      ? {
          filters: {
            publication_type: activeType
          }
        }
      : {}),
    sort: {
      [activeSortParameter]: parameterToOrderMap[activeSortParameter]
    }
  });

  return (
    <PageLayout title="Publications">
      <div className="grid grid-flow-row gap-8">
        <div>
          {!!publicationTypes && (
            <FilterMenu
              menuLabel="Filtres"
              menuItems={[
                {
                  label: "Tout",
                  to: makeUrlWithSortAndFilterParams({
                    sortParameter: activeSortParameter,
                    rootRoute
                  })
                },
                ...publicationTypes.map((type) => ({
                  label: type.name || "",
                  to: makeUrlWithSortAndFilterParams({
                    typeId: type.id,
                    sortParameter: activeSortParameter,
                    rootRoute
                  })
                }))
              ]}
              activeTo={activeUrl}
            />
          )}
        </div>
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
          {publications?.map((publication) => (
            <div>
              <PublicationPreview
                publication={publication}
                key={publication.id}
              />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
