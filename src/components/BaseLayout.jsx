import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { MainNavigation } from "./MainNavigation";
import { Loader } from "./Loader";

export const BaseLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col items-center">
      <Header>
        <MainNavigation />
      </Header>
      <div className="flex flex-col px-6 relative h-full w-2/3">
        <Outlet />
        {navigation.state === "loading" && <Loader />}
      </div>
    </div>
  );
};
