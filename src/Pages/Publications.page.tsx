import React from "react";
import { useSearchParams } from "react-router-dom";
import { FilterMenu } from "../Components/FilterMenu";
import { PageLayout } from "../Components/PageLayout";
import { AnArchivePreview } from "../Components/Previews/AnArchive.preview";
import { PublicationPreview } from "../Components/Previews/Publication.preview";
import { usePublicationsQuery } from "../ReactQuery/publications.queries";
import { usePublicationTypesQuery } from "../ReactQuery/publicationTypes.queries";
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

function makePublicationUrl({
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

  return `${getRoute(FRONT_END_ROUTES.publications)}?${queryString}`;
}
export function PublicationsPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const activeType = searchParams.get("type") || undefined;
  const sortParameter =
    (searchParams.get("sortParameter") as SortParameter) || SortParameter.title;

  const activeUrl = makePublicationUrl({
    typeId: activeType,
    sortParameter: sortParameter
  });

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
      [sortParameter]: parameterToOrderMap[sortParameter]
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
                  to: makePublicationUrl({
                    sortParameter
                  })
                },
                ...publicationTypes.map((type) => ({
                  label: type.name || "",
                  to: makePublicationUrl({
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
                to: makePublicationUrl({
                  typeId: activeType,
                  sortParameter: SortParameter.title
                })
              },
              {
                label: "Année",
                to: makePublicationUrl({
                  typeId: activeType,
                  sortParameter: SortParameter.date
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
