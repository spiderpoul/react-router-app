import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { mockFetch } from "../utils/api";
import { LinkButton } from "../components/LinkButton";
import { Tabs } from "../components/Tabs";
import { CourseDescription } from "../components/CourseDescription";
import { CourseAuthor } from "../components/CourseAuthor";

const TABS = [
  {
    path: "",
    title: "Course program",
  },
  {
    path: "author",
    title: "About author",
  },
];

export const CourseDetails = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    mockFetch(`/courses/${id}`).then(res => setData(res));
  }, [id]);

  if (!data) return <Loader />;

  const { imageUrl, title, description } = data || {};

  return (
    <div className="card-container mt-10">
      <div className="flex flex-col">
        <div className="w-full">
          <img
            className="h-[250] w-full object-cover"
            src={imageUrl}
            alt="course"
          />
        </div>
        <div className="p-8">
          <div className="content-type">Course</div>
          <div className="course-title">{title}</div>
          <p className="mt-2 text-slate-500 mb-6">{description}</p>
          <Tabs tabs={TABS}/>
          <Routes>
            <Route index element={<CourseDescription />} />
            <Route path="author" element={<CourseAuthor />} />
          </Routes>
          <LinkButton to="start-course" title="Start course" />
        </div>
      </div>
    </div>
  );
};
