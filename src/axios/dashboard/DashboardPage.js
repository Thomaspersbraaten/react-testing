import Heading from "../layout/Heading";
import DashboardMenu from "./DashboardMenu";
import MediaDropdown from "./media/mediaDropdown";

export default function DashboardPage({ children }) {
  return (
    <>
      <Heading content="Dashboard" />
      <DashboardMenu />
      {children ? children : <p>Select a section</p>}
    </>
  );
}
