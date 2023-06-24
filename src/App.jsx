import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Student from "./pages/StudentList/Student";
import View from "./pages/View/View";
import SubjectList from "./pages/SubjectList/SubjectList";
import SubjectAdd from "./pages/SubjectAdd/SubjectAdd";
import SubjectEdit from "./pages/SubjectEdit/SubjectEdit";
import Calendar from "./pages/Calendar/Calendar";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Student />} />
            <Route path="/view" element={<View />} />
            <Route path="/subjects" element={<SubjectList />} />
            <Route path="/subject-add" element={<SubjectAdd />} />
            <Route path="/subject-edit" element={<SubjectEdit />} />
            <Route path="/calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
