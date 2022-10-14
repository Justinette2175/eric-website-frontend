import React from "react";
import { useWebsiteInfoQuery } from "../ReactQuery/websiteInfo.queries";

export function Header(): React.ReactElement {
  const { data } = useWebsiteInfoQuery();
  return (
    <div className="flex h-full px-8 items-center">
      <div>
        <h1 className="text-2xl mb-1 font-bold">{data?.title}</h1>
        <h2 className="">{data?.description}</h2>
      </div>
    </div>
  );
}
