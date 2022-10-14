import { PropsWithChildren } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useAnArchiveTypesQuery } from "../ReactQuery/anArchiveTypes.queries";
import { usePublicationTypesQuery } from "../ReactQuery/publicationTypes.queries";
import { FRONT_END_ROUTES, getRoute } from "../Routes";

type SideMenuItemProps = {
  label: string;
  link: string;
  level?: 1 | 2;
};

export function SideMenuItem({
  label,
  link,
  children,
  level
}: PropsWithChildren<SideMenuItemProps>) {
  const location = useLocation();

  const isActive = !!matchPath(location.pathname, link);

  return (
    <div
      className={`underline-offset-4 cursor-pointer ${
        isActive && "underline"
      } `}
    >
      <Link
        to={link}
        className={`block ${level === 2 ? "text-md" : "text-lg"} `}
      >
        {label}
      </Link>
      {children}
    </div>
  );
}

export function SideMenu() {
  const { data: publicationTypes } = usePublicationTypesQuery();
  const { data: anarchiveTypes } = useAnArchiveTypesQuery();

  return (
    <div className="grid grid-auto-column gap-6 max-w-[300px] text-right">
      <SideMenuItem link={getRoute(FRONT_END_ROUTES.home)} label="Accueil" />
      <div>
        <SideMenuItem
          link={getRoute(FRONT_END_ROUTES.anArchives)}
          label="An-archives"
        />
        {anarchiveTypes?.map((type) => (
          <SideMenuItem
            key={type.id}
            link={`${getRoute(FRONT_END_ROUTES.anArchives)}?type=${type.id}`}
            label={type.name || ""}
            level={2}
          />
        ))}
      </div>

      <div>
        <SideMenuItem
          link={getRoute(FRONT_END_ROUTES.publications)}
          label="Publications"
        ></SideMenuItem>

        {publicationTypes?.map((type) => (
          <SideMenuItem
            key={type.id}
            link={`${getRoute(FRONT_END_ROUTES.publications)}?type=${type.id}`}
            label={type.name || ""}
            level={2}
          />
        ))}
      </div>

      <SideMenuItem
        link={getRoute(FRONT_END_ROUTES.academique)}
        label="Académique"
      />

      <SideMenuItem link={getRoute(FRONT_END_ROUTES.presse)} label="Presse" />

      <SideMenuItem link={getRoute(FRONT_END_ROUTES.contact)} label="Contact" />
    </div>
  );
}
