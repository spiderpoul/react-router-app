import {
  Form,
  json,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { mockFetch } from "../utils/api";
import { Loader } from "../components/Loader";

export const StartCoursePage = () => {
  return (
    <div className="pt-10 flex flex-col items-center">
      <h1 className="text-xl font-medium text-black mb-5">
        Start your learning path now
      </h1>

      <form className="flex flex-col items-center">
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <button className="button" type="submit">
          Start course
        </button>
      </form>
    </div>
  );
};
