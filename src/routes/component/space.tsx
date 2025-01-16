import Space from '@/components/Space';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/component/space')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Space direction="horizontal" gapX={10}>
        <div className="w-[100px] h-[100px] bg-[pink] border-[1px] border-solid border-[#000]" />
        <div className="w-[100px] h-[100px] bg-[pink] border-[1px] border-solid border-[#000]" />
        <div className="w-[100px] h-[100px] bg-[pink] border-[1px] border-solid border-[#000]" />
      </Space>
      <Space direction="vertical" gapY={10}>
        <div className="w-[100px] h-[100px] bg-[pink] border-[1px] border-solid border-[#000]" />
        <div className="w-[100px] h-[100px] bg-[pink] border-[1px] border-solid border-[#000]" />
        <div className="w-[100px] h-[100px] bg-[pink] border-[1px] border-solid border-[#000]" />
      </Space>
    </div>
  );
}
