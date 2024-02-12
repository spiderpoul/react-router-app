import { useAsyncError, useRouteError } from "react-router-dom";

const ERROR_CODES = {
  404: "Not found",
  401: "Not allowed",
  500: "Server error",
};

const errorIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    class="w-64 h-64 text-slate-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
    />
  </svg>
);

export const ErrorPage = ({ errorCode = 404 }) => {
  const errorAsync = useAsyncError();
  const errorRoute = useRouteError();

  const message = errorAsync?.message || errorRoute?.message;
  const status = errorAsync?.status || errorRoute?.status;

  return (
    <div className="flex flex-col items-center mt-40">
      {errorIcon}

      <div className="text-xl font-medium text-slate-700 mb-5">
        {ERROR_CODES[status || errorCode]}
      </div>

      {message && <p className="text-slate-500 text-sm mb-10">{message}</p>}

      <p className="text-slate-500">Sorry for inconvenience!</p>
    </div>
  );
};
