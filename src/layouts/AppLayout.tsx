import { Outlet } from "react-router";
import AppHeader from "../ui/components/AppHeader";

export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
      <footer></footer>
    </>
  );
}
