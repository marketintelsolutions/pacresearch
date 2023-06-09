import Navbar from "./components/Navbar";
import SharedLayout from "./components/SharedLayout";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Business,
  Landing,
  Resources,
  Services,
  Error,
  Contact,
  ResourcesAdmin,
} from "./pages";
import ResourceDetails from "./pages/ResourceDetails";

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business" element={<Business />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<ResourceDetails />} />
        <Route path="/resources/:id/pacadmin101" element={<ResourcesAdmin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
