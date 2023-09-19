import { NavLink } from "react-router-dom";

export const LinkButton = ({ title, to, onClick, ...props }) => {
  return (
    <NavLink
      to={to}
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={onClick}
      {...props}
    >
      {title}
    </NavLink>
  );
};
