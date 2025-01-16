import Message from '@/components/Message';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/component/message')({
  component: RouteComponent,
  loader: () => {},
});

function RouteComponent() {
  return (
    <div>
      Hello "/component/message"!
      <Message />
    </div>
  );
}
