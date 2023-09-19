import { MainNavigation } from "./MainNavigation";

export const BaseLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <MainNavigation />
      <div className="flex flex-col px-6 relative h-full w-2/3">{children}</div>
    </div>
  );
};
