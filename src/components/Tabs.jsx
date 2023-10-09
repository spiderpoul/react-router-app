import { Link } from "react-router-dom";

export const Tabs = ({ tabs }) => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      {tabs.map(({ path, title }) => (
        <li className="mr-2" key={path}>
          <Link
            to={path}
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
