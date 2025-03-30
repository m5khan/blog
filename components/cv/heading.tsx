import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
};

export function Heading({ title }: Props) {
  return (
    <div className="flex gap-1">
      {/* {icon} */}
      <h2 className="text-sm font-medium text-sky-600">{title}</h2>
    </div>
  );
}
