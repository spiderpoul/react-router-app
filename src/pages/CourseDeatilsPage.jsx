import {
  Await,
  Route,
  Routes,
  defer,
  useAsyncValue,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { mockFetch } from "../utils/api";
import { LinkButton } from "../components/LinkButton";
import { Tabs } from "../components/Tabs";
import { CourseDescription } from "../components/CourseDescription";
import { CourseAuthor } from "../components/CourseAuthor";
import { ErrorPage } from "./ErrorPage";

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

export const courseLoader = async ({ params }) => {
  const course = mockFetch(`/courses/${params.id}`);

  return defer({ course });
};

const CourseDetailsInner = () => {
  const { imageUrl, title, description } = useAsyncValue();

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

          <Tabs tabs={TABS} />

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

export const CourseDetails = () => {
  const { course } = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={course} errorElement={<ErrorPage />}>
        <CourseDetailsInner />
      </Await>
    </Suspense>
  );
};
