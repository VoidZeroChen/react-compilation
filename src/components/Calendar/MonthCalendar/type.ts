import type { Dayjs } from 'dayjs';
import type { CalendarProps } from '../type';

export interface MonthCalendarProps extends CalendarProps {
  curMonth: Dayjs;
  selectHandler?: (date: Dayjs) => void;
}
