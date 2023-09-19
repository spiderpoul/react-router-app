import { useEffect, useState } from "react";
import { CourseCard } from "../components/CourseCard";
import {mockFetch} from '../utils/api'
import { Loader } from "../components/Loader";

export const CoursesPage = () => {
  const [data, setData] = useState()

  useEffect(() => {
    mockFetch('/courses').then(data => setData(data))
  }, [])

  if (!data) {
    return <Loader />
  }

  return (
    <div className="flex-col">
      <div className="flex justify-center px-5 py-10">
        <input type="text" className="search-input" placeholder="Search courses" />
      </div>
      {data?.map((item) => (
        <CourseCard key={item.id} {...item} />
      ))}
    </div>
  );
};
