import React, { PropsWithChildren } from "react";
import { Helmet } from "./Helmet";
import { PageTitle } from "./PageTitle";

type PageLayoutProps = {
  title?: string;
};

export function PageLayout({
  title,
  children,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <React.Fragment>
      <Helmet title={title || ""} />
      <div className="py-12 px-8 grid grid-flow-row gap-12 max-w-4xl">
        {title && <PageTitle title={title} />}
        <div>{children}</div>
      </div>
    </React.Fragment>
  );
}
