import React from "react";

export function PageTitle({ title }: { title: string }): React.ReactElement {
  return <h1 className="text-6xl font-bold">{title}</h1>;
}
