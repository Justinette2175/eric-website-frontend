import React from "react";
import { useSearchParams } from "react-router-dom";
import { FilterMenu } from "../Components/FilterMenu";
import { PageLayout } from "../Components/PageLayout";
import { AnArchivePreview } from "../Components/Previews/AnArchive.preview";
import { useAnArchivesQuery } from "../ReactQuery/anArchives.queries";
import { useAnArchiveTypesQuery } from "../ReactQuery/anArchiveTypes.queries";
import { FRONT_END_ROUTES, getRoute } from "../Routes";

enum SortParameter {
  date = "date",
  title = "title"
}

enum SortOrder {
  desc = "desc",
  asc = "asc"
}

const parameterToOrderMap = {
  [SortParameter.date]: SortOrder.desc,
  [SortParameter.title]: SortOrder.asc
};

function makeAnArchiveUrl({
  typeId,
  sortParameter
}: {
  typeId?: string;
  sortParameter?: SortParameter;
}) {
  let queryString = "";
  if (typeId) {
    queryString += `type=${typeId}&`;
  }

  if (sortParameter) {
    queryString += `sortParameter=${sortParameter}&`;
  }

  return `${getRoute(FRONT_END_ROUTES.anArchives)}?${queryString}`;
}

export function AnArchivesPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const activeType = searchParams.get("type") || undefined;
  const sortParameter =
    (searchParams.get("sortParameter") as SortParameter) || SortParameter.title;

  const activeUrl = makeAnArchiveUrl({
    typeId: activeType,
    sortParameter: sortParameter
  });

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
      [sortParameter]: parameterToOrderMap[sortParameter]
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
                  to: makeAnArchiveUrl({
                    sortParameter
                  })
                },
                ...anAchiveTypes.map((type) => ({
                  label: type.name || "",
                  to: makeAnArchiveUrl({
                    typeId: type.id,
                    sortParameter
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
                to: makeAnArchiveUrl({
                  typeId: activeType,
                  sortParameter: SortParameter.title
                })
              },
              {
                label: "Année",
                to: makeAnArchiveUrl({
                  typeId: activeType,
                  sortParameter: SortParameter.date
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
