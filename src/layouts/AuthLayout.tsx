import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-repeat-y -z-10"
        style={{
          backgroundImage: "url('/auth-overlay.svg')",
          backgroundSize: "100% auto",
        }}
      />
      <Outlet />
    </>
  );
}
