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
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="courses/:id/*" element={<CourseDetails />} />
        <Route path="courses" element={<CoursesPage />} />

        <Route
          path={ROUTES.user}
          element={
            <ProtectedRoute isAllowed={false}>
              <UserPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
