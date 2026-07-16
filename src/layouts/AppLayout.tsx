import { Outlet } from "react-router";
import AppHeader from "../ui/components/AppHeader";
import useDisableTransitions from "../hooks/useDisableTransitions";

export default function AppLayout() {
  useDisableTransitions();

  return (
    <>
      <AppHeader />
      <Outlet />
      <footer></footer>
    </>
  );
}
