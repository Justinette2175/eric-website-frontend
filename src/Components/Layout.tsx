import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 h-24">
        <Header />
      </div>
      <div className="pt-32 flex content-container">
        <div className="px-8 py-12">
          <SideMenu />
        </div>
        <div className="flex-1"> {children}</div>
      </div>
      <Footer />
    </div>
  );
}
