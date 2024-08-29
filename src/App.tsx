import { Route, Routes } from "react-router-dom";
import VideoEditor from "./pages/VideoEditor";
import Dialog from "./components/Dialog";
import SearchSelectVideo from "./pages/SearchSelectVideo";
import SetupshotVideo from "./pages/SetupShot";
import VideoResultPage from "./pages/VideoResult";
import ImportVideoPage from "./pages/ImportVideoPage";
import ImportVideoPageV2 from "./pages/ImportVideoPageV2";
import VideoFullPage from "./pages/VideoFullPage";
import FFFFF from "./pages/TesstFFmpeg";

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
      <Route path="result-video" 
      element={
        <VideoResultPage
          videoUrl="https://cdn.bongdaplus.vn/assets//Media/2024/08/24/17/granitxhaka-ghi-ban.mp4"
          aspectRatio="16:9"
          videoWidth={1280}
          videoHeight={720}
          videoDuration={60}
          outputFormat="mp4"
        />
      }/>
      <Route path="import-video" element={<ImportVideoPage/>}/>
      <Route path="video-full" element={<VideoFullPage/>}/>
      <Route path="test" element={<FFFFF/>}/>
    </Routes>
  );
}
