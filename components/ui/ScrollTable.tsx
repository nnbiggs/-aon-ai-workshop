import type { ReactNode } from "react";

type ScrollTableProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

export default function ScrollTable({
  children,
  label = "Swipe to see more",
  className = "",
}: ScrollTableProps) {
  return (
    <div className={className}>
      <p className="table-scroll-hint mb-2 font-mono text-[10px] uppercase tracking-wider text-white-30 lg:hidden">
        {label}
      </p>
      <div className="table-scroll-wrap -mx-4 px-4 sm:mx-0 sm:px-0 lg:overflow-visible">
        {children}
      </div>
    </div>
  );
}
