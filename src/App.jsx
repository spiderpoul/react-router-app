import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { BaseLayout } from "./components/BaseLayout";
import { AboutPage } from "./pages/AboutPage";
import { CourseDetails, courseLoader } from "./pages/CourseDeatilsPage";
import { CoursesPage, coursesLoader } from "./pages/CoursesPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { ROUTES } from "./constants";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserPage } from "./pages/UserPage";
import { Loader } from "./components/Loader";
import { CourseDescription } from "./components/CourseDescription";
import { CourseAuthor } from "./components/CourseAuthor";
import { StartCoursePage, startCourseAction } from "./pages/StartCoursePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />

      <Route
        path="courses/:id"
        element={<CourseDetails />}
        loader={courseLoader}
      >
        <Route index element={<CourseDescription />} />
        <Route path="author" element={<CourseAuthor />} />
      </Route>

      <Route
        path="courses/:id/start-course"
        element={<StartCoursePage />}
        action={startCourseAction}
      />

      <Route path="courses" element={<CoursesPage />} loader={coursesLoader} />

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
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
