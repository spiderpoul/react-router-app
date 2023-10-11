import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "./components/BaseLayout";
import { AboutPage } from "./pages/AboutPage";
import { CourseDetails } from "./pages/CourseDeatilsPage";
import { CoursesPage } from "./pages/CoursesPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { ROUTES } from "./constants";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserPage } from "./pages/UserPage";

function App() {
  const isAuthorized = false;
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id/*" element={<CourseDetails />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute isAllowed={isAuthorized}>
              <UserPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage errorCode={404} />} />
      </Route>
    </Routes>
  );
}

export default App;
