import { useEffect, useState } from "react";
import { CourseCard } from "../components/CourseCard";
import { mockFetch } from "../utils/api";
import { Loader } from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";

export const CoursesPage = () => {
  const [data, setData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromQuery = searchParams.get("search");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(searchFromQuery || "");

  useEffect(() => {
    setIsLoading(true);

    mockFetch("/courses", { search })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));

    setSearchParams((params) => {
      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }
      return params;
    });
  }, [search]);

  if (!data) {
    return <Loader />;
  }

  if (error) return <ErrorPage errorCode={error.status} />;

  return (
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
        {isLoading && <Loader />}
        {data?.map((item) => (
          <CourseCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
