import { Route, Routes } from "react-router-dom";
import VideoEditor from "./pages/VideoEditor";
import Dialog from "./components/Dialog";
import SearchSelectVideo from "./pages/SearchSelectVideo";
import SetupshotVideo from "./pages/SetupShot";

import ImportVideoPage from "./pages/ImportVideoPage";
import VideoFullPage from "./pages/VideoFullPage";

import ClipsPage from "./pages/ClipsPage";
import VideoFullPageV2 from "./pages/VideoFullPageV2";


export default function App() {

  return (
    <Routes>
      <Route path="/home" element={<VideoEditor />}>
        <Route
          path="create-shot"
          
          element={<Dialog />}
        />
      </Route>
      <Route path="search-select-video" element={<SearchSelectVideo/>}/>
      <Route path="setting-shot-video" element={<SetupshotVideo/>}/>

      <Route path="import-video" element={<ImportVideoPage/>}/>
      <Route path="video-full" element={<VideoFullPageV2/>}/>

      <Route path="/clips" element={<ClipsPage />}></Route>

      </Routes>
  );
}
