import { BrowserRouter, Route, Routes } from "react-router-dom";
/** importing our pages */
import { ModulePage } from "./module-page";
import { TrackLayout } from "./track-page";
import Tracks from "./tracks-page";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
        <Route element={<TrackLayout />} path="/track/:trackId" />
        <Route
          element={<ModulePage />}
          path="/track/:trackId/module/:moduleId"
        />
      </Routes>
    </BrowserRouter>
  );
}
