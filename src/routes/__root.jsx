import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "../Footer";
import Header from "../Header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-x-hidden">
        <Header />
        <div className="flex place-content-center">
          <div className="w-lg">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
