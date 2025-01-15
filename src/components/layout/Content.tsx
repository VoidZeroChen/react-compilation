import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export default function Content() {
  return (
    <div className="flex-1 p-5 h-[calc(100vh-65px)] overflow-auto bg-base-100">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
