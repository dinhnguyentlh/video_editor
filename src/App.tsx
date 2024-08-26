import { Route, Routes } from "react-router-dom";
import VideoEditor from "./pages/VideoEditor";
import Dialog from "./components/Dialog";

export default function App() {


  return (
    <Routes>
      <Route path="/home" element={<VideoEditor />}>
        <Route
          path="create-shot"
          element={<Dialog />}
        />
      </Route>
    </Routes>
  );
}
