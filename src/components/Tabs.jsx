import { Link, useLocation, useMatch } from "react-router-dom";
import { ROUTES } from "../constants";

const TabLink = ({ path, title }) => {
  return (
    <Link to={path} className={`tab-link`}>
      {title}
    </Link>
  );
};

export const Tabs = ({ tabs }) => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      {tabs.map(({ path, title }) => (
        <li className="mr-2" key={path}>
          <TabLink path={path} title={title} />
        </li>
      ))}
    </ul>
  );
};
