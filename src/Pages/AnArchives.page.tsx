import React from "react";
import { FilterMenu } from "../Components/FilterMenu";
import { PageLayout } from "../Components/PageLayout";
import { AnArchivePreview } from "../Components/Previews/AnArchive.preview";
import {
  makeUrlWithSortAndFilterParams,
  parameterToOrderMap,
  SortParameter,
  useSortAndFilterParams
} from "../Hooks/useSortAndFilterParams";
import { useAnArchivesQuery } from "../ReactQuery/anArchives.queries";
import { useAnArchiveTypesQuery } from "../ReactQuery/anArchiveTypes.queries";
import { FRONT_END_ROUTES, getRoute } from "../Routes";

export function AnArchivesPage(): React.ReactElement {
  const rootRoute = FRONT_END_ROUTES.anArchives;
  const { activeSortParameter, activeType, activeUrl } = useSortAndFilterParams(
    { rootRoute }
  );

  const { data: anAchiveTypes } = useAnArchiveTypesQuery();

  const { data: anArchives } = useAnArchivesQuery({
    ...(activeType
      ? {
          filters: {
            an_archive_type: activeType
          }
        }
      : {}),
    sort: {
      [activeSortParameter]: parameterToOrderMap[activeSortParameter]
    }
  });

  return (
    <PageLayout title="An-Archives">
      <div className="grid grid-flow-row gap-8">
        <div>
          {!!anAchiveTypes && (
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
                ...anAchiveTypes.map((type) => ({
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
          {/* {anArchives?.length === 0 } */}
          {anArchives?.map((anArchive) => {
            return (
              <div key={anArchive.id}>
                <AnArchivePreview
                  anArchive={anArchive}
                  linkTo={
                    anArchive.content
                      ? `${getRoute(FRONT_END_ROUTES.anArchives)}/${
                          anArchive.id
                        }`
                      : undefined
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
