import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Student from "./pages/StudentList/Student";
import View from "./pages/View/View";
import Calendar from "./pages/Calendar/Calendar";
import Kanban from './pages/Kanban/Kanban'
import Transcript from './pages/Transcript/Transcript'
const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Student />} />
            <Route path="/view" element={<View />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/transcript" element={<Transcript/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
