import { useControllableValue } from 'ahooks';
import dayjs from 'dayjs';
import { useState } from 'react';

import HeaderCalendar from './HeaderCalendar';
import MonthCalendar from './MonthCalendar';

import type { Dayjs } from 'dayjs';
import type { CalendarProps } from './type';

export default function Calendar(props: CalendarProps) {
  const { className, onChange } = props;

  const [curValue, setCurValue] = useControllableValue<Dayjs>(props, {
    defaultValue: dayjs(),
  });
  const [curMonth, setCurMonth] = useState<Dayjs>(curValue);

  function changeDate(date: Dayjs) {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  function selectHandler(date: Dayjs) {
    changeDate(date);
  }

  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, 'month'));
  }

  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, 'month'));
  }

  function todayHandler() {
    const date = dayjs(Date.now());
    changeDate(date);
  }

  return (
    <div className={`w-full h-48 ${className}`}>
      <HeaderCalendar
        curMonth={curMonth}
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
        todayHandler={todayHandler}
      />
      <MonthCalendar
        {...props}
        value={curValue}
        curMonth={curMonth}
        selectHandler={selectHandler}
      />
    </div>
  );
}
