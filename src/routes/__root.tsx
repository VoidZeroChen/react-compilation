import { createRootRoute } from '@tanstack/react-router';

import Header from '@/components/layout/Header';
import Sider from '@/components/layout/Sider';
import Content from '@/components/layout/Content';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className="flex">
          <Sider />
          <Content />
        </div>
      </div>
    </>
  ),
});
