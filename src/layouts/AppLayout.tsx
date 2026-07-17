import { Outlet } from "react-router";
import AppHeader from "../ui/components/AppHeader";
import useDisableTransitions from "../hooks/useDisableTransitions";
import AppFooter from "../ui/components/AppFooter";

export default function AppLayout() {
  useDisableTransitions();

  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
}
