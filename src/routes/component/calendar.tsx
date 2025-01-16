import dayjs from 'dayjs';

import Calendar from '@/components/Calendar';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/component/calendar')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Calendar
      defaultValue={dayjs('2024-12-01')}

      // dateRender={dateRender}
      // dateInnerContent={dateInnerContent}
    />
  );
}
