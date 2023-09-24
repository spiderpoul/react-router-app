import { Suspense, useEffect, useState } from "react";
import { CourseCard } from "../components/CourseCard";
import { mockFetch } from "../utils/api";
import { Loader } from "../components/Loader";
import {
  Await,
  defer,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

export const coursesLoader = ({ request }) => {
  const search = new URL(request.url).searchParams.get("search");
  const courses = mockFetch("/courses", { search });

  return defer({
    courses,
  });
};

export const CoursesPage = () => {
  const { courses } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromQuery = searchParams.get("search");
  const { state } = useNavigation();
  const [search, setSearch] = useState(searchFromQuery || "");

  useEffect(() => {
    setSearchParams((params) => {
      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }
      return params;
    });
  }, [search]);

  return (
    <Suspense fallback={<Loader />}>
      <Await
        resolve={courses}
        errorElement={<div>Oops, error while loading courses</div>}
      >
        {(courses) => (
          <div className="flex-col">
            <div className="flex justify-center px-5 py-10">
              <input
                type="text"
                className="search-input"
                placeholder="Search courses"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="relative">
              {state === "loading" && <Loader />}
              {courses?.map((item) => (
                <CourseCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  );
};
