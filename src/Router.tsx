import { Routes, Route } from "react-router-dom";
import { AcademiquePage } from "./Pages/AcademiquePage";
import { AnArchivePage } from "./Pages/AnArchive.page";
import { AnArchivesPage } from "./Pages/AnArchives.page";
import { ContactPage } from "./Pages/ContactPage";
import { HomePage } from "./Pages/Home.page";
import { PressePage } from "./Pages/Presse.page";
import { PublicationsPage } from "./Pages/Publications.page";
import { FRONT_END_ROUTES, getRoute } from "./Routes";

export default function Router() {
  return (
    <Routes>
      <Route
        path={`${getRoute(FRONT_END_ROUTES.anArchives)}/:id`}
        element={<AnArchivePage />}
      />
      <Route
        path={getRoute(FRONT_END_ROUTES.anArchives)}
        element={<AnArchivesPage />}
      />
      <Route
        path={getRoute(FRONT_END_ROUTES.publications)}
        element={<PublicationsPage />}
      />
      <Route
        path={getRoute(FRONT_END_ROUTES.academique)}
        element={<AcademiquePage />}
      />
      <Route
        path={getRoute(FRONT_END_ROUTES.presse)}
        element={<PressePage />}
      />
      <Route
        path={getRoute(FRONT_END_ROUTES.contact)}
        element={<ContactPage />}
      />
      <Route path={getRoute(FRONT_END_ROUTES.home)} element={<HomePage />} />
    </Routes>
  );
}
