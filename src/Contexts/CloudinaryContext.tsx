import React, { createContext, PropsWithChildren, useContext } from "react";
import { Cloudinary } from "@cloudinary/url-gen";

const CloudinaryContext = createContext<{
  cld?: Cloudinary;
}>({});

export function useCloudinaryContext() {
  return useContext(CloudinaryContext);
}

export function CloudinaryContextProvider({
  children
}: PropsWithChildren<{}>): React.ReactElement {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dgclomztz"
    }
  });

  return (
    <CloudinaryContext.Provider value={{ cld }}>
      {children}
    </CloudinaryContext.Provider>
  );
}
