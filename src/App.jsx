import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "./components/BaseLayout";
import { AboutPage } from "./pages/AboutPage";
import { CourseDetails } from "./pages/CourseDeatilsPage";
import { CoursesPage } from "./pages/CoursesPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { ROUTES } from "./constants";

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path={ROUTES.homePage} element={<HomePage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.courseDetails} element={<CourseDetails />} />
        <Route path={ROUTES.courses} element={<CoursesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
