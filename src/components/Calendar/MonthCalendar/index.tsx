import type { Dayjs } from 'dayjs';
import type { MonthCalendarProps } from './type';

function getAllDays(date: Dayjs) {
  const startDate = date.startOf('month');
  const day = startDate.day() === 0 ? 7 : startDate.day();

  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7,
  );

  for (let i = 0; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day + 1, 'day');
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month(),
    };
  }
  return daysInfo;
}

export default function MonthCalendar(props: MonthCalendarProps) {
  const { value, curMonth, dateRender, dateInnerContent, selectHandler } =
    props;

  const weekList = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

  const allDays = getAllDays(curMonth);

  function renderDays(days: Array<{ date: Dayjs; currentMonth: boolean }>) {
    const rows = [];
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        const item = days[i * 7 + j];
        row[j] = (
          <div
            className={`flex-[1] h-[80px] border-[1px] border-solid border-[#eee] p-[10px] overflow-hidden ${item.currentMonth ? 'text-[#000]' : 'text-[#ccc]'}`}
            key={String(i) + String(j)}
            onClick={() => selectHandler?.(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className="p-[10px]">
                <div
                  className={`calendar-month-body-cell-date-value ${value?.format('YYYY-MM-DD') === item.date?.format('YYYY-MM-DD') ? 'bg-[blue] w-[28px] h-[28px] leading-[28px] text-center text-[#fff] rounded-[50%] cursor-pointer' : ''} }`}
                >
                  {item.date.date()}
                </div>
                <div className="calendar-month-body-cell-date-content">
                  {dateInnerContent?.(item.date)}
                </div>
              </div>
            )}
          </div>
        );
      }
      rows.push(row);
    }
    return rows.map((row) => {
      return (
        <div className="flex max-h-full" key={row[0].key}>
          {row}
        </div>
      );
    });
  }

  return (
    <div>
      <div className="flex p-0 w-full box-border [border-bottom:1px_solid_#ccc]">
        {weekList.map((week) => (
          <div
            className="px-[16px] py-[20px] text-left text-[#7d7d7f] flex-[1]"
            key={week}
          >
            {week}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">{renderDays(allDays)}</div>
    </div>
  );
}
