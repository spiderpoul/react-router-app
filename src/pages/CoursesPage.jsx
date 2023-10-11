import { useEffect, useState } from "react";
import { CourseCard } from "../components/CourseCard";
import { mockFetch } from "../utils/api";
import { Loader } from "../components/Loader";
import { useSearchParams } from "react-router-dom";

export const CoursesPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    mockFetch("/courses")
      .then((data) => setData(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="flex-col">
      <div className="flex justify-center px-5 py-10"></div>
      <div className="relative">
        {isLoading && <Loader />}
        {data?.map((item) => (
          <CourseCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
