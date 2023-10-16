import { BrowserRouter, Route, Routes } from "react-router-dom";
/** importing our pages */
import { TrackLayout } from "./trackLayout";
import Tracks from "./tracks";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
        <Route element={<TrackLayout />} path="/track/:trackId" />
      </Routes>
    </BrowserRouter>
  );
}
