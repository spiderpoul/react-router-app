import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../constants";

export const MainNavigation = () => {
  return (
      <nav className="flex">
        {NAV_ITEMS.map((item) => (
          <NavLink to={item.path} className={({ isActive }) => `px-3 ${isActive ? "text-amber-300" : ""}`}>
            {item.title}
          </NavLink>
        ))}
      </nav>
    );
};
