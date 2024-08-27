import { Route, Routes } from "react-router-dom";
import VideoEditor from "./pages/VideoEditor";
import Dialog from "./components/Dialog";
import SearchSelectVideo from "./pages/SearchSelectVideo";

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
    </Routes>
  );
}
