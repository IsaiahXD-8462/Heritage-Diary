// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddProfilePage from "./pages/AddProfilePage/AddProfilePage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import FamilyDiagramPage from "./pages/FamilyDiagramPage/FamilyDiagramPage";
import SearchProfilePage from "./pages/SearchProfilePage/SearchProfilePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import DiaryProfileForm from "./components/DiaryProfileForm/DiaryProfileForm";
import LinkingFeature from "./components/LinkingFeature/LinkingFeature";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
