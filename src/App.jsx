import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Specs from "./pages/Specs";
import Brand from "./pages/Brand";
import Learn from "./pages/Learn";
import Sales from './pages/Sales'
import Schedule from './pages/Schedule'
import Setting from './pages/Settings'
import Manageuser from "./pages/Manageuser";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      
        <Route path="/brand" element={<Brand />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learn" element={<Learn/>} />
        <Route path="/manageuser" element={<Manageuser />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/specs" element={<Specs />} />
        <Route path="/" element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
