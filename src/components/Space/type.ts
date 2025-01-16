export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  gapX?: number;
  gapY?: number;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  split?: React.ReactNode;
  wrap?: boolean;
}
