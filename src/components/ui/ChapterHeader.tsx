import React from "react";

interface ChapterHeaderProps {
  number?: React.ReactNode;
  title: string;
}

export function ChapterHeader({ number, title }: ChapterHeaderProps) {
  return (
    <div className="chapter-header">
      {number ? <span className="chapter-number">{number}</span> : null}
      {title}
    </div>
  );
}
