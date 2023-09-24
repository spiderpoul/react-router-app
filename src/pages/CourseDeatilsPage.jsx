import { Await, Outlet, defer, useLoaderData } from "react-router-dom";
import { mockFetch } from "../utils/api";
import { LinkButton } from "../components/LinkButton";
import { Tabs } from "../components/Tabs";
import { Suspense } from "react";
import { Loader } from "../components/Loader";

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

export const courseLoader = ({ params: { id } }) => {
  const course = mockFetch(`/courses/${id}`);
  return defer({
    course,
  });
};

export const CourseDetails = () => {
  const { course } = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={course}>
        {({ imageUrl, title, description }) => (
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
                <Outlet />
                <LinkButton to="start-course" title="Start course" />
              </div>
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  );
};
