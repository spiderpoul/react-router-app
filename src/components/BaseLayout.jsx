import { Header } from "./Header";

export const BaseLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Header>Header</Header>
      <div className="flex flex-col px-6 relative h-full w-2/3">
        Main Content
      </div>
    </div>
  );
};
