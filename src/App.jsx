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
import { CoursesPage } from "./pages/CoursesPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { ROUTES } from "./constants";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserPage } from "./pages/UserPage";
import { Loader } from "./components/Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route
        path="/courses/:id/*"
        loader={courseLoader}
        element={<CourseDetails />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
