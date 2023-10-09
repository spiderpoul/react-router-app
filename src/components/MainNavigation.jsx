import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../constants";

export const MainNavigation = () => {
  return (
    <nav className="flex">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive ? "px-3 text-amber-300" : "px-3"
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};
