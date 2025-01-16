import type { HeaderProps } from './type';

export default function Header(props: HeaderProps) {
  const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props;

  return (
    <div className="calendar-header">
      <div className="flex items-center h-[28px] leading-[28px]">
        <div
          className="w-6 h-6 leading-7 text-center text-xs select-none cursor-pointer mx-[12px] hover:bg-[#ccc]"
          onClick={prevMonthHandler}
        >
          &lt;
        </div>
        <div className="text-[20px]">{curMonth.format('YYYY 年 MM 月')}</div>
        <div
          className="w-6 h-6 leading-7 text-center text-xs select-none cursor-pointer mx-[12px] hover:bg-[#ccc]"
          onClick={nextMonthHandler}
        >
          &gt;
        </div>
        <button
          className="px-[15px] py-[0] bg-[#eee] cursor-pointer border-[0] leading-[28px] hover:bg-[#ccc]"
          onClick={todayHandler}
        >
          今天
        </button>
      </div>
    </div>
  );
}
