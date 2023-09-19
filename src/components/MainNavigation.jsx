import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../constants";

export const MainNavigation = () => {
  return (
    <header className="flex justify-start bg-slate-500 p-6 pl-11 text-gray-100 w-full">
      <nav className="flex">
        {NAV_ITEMS.map((navItem) => (
          <div className="px-3" key={navItem.path}>
            <Link to={navItem.path}>{navItem.title}</Link>
          </div>
        ))}
      </nav>
    </header>
  );
};
