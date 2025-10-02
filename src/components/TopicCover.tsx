import React from "react";

interface TopicCoverProps {
  unitLabel?: string;
  unitNumber?: string | number;
  title: string;
  subtitle?: string;
}

export default function TopicCover({ unitLabel = "Unit", unitNumber = "", title, subtitle }: TopicCoverProps) {
  return (
    <div className="page">
      <div className="cover-wrap">
        <div className="cover-header">
          <span className="cover-unit">{unitLabel}</span>
          {unitNumber ? <span className="cover-number">{unitNumber}</span> : null}
        </div>
        <div className="cover-box">
          <h1 className="cover-title">{title}</h1>
          {subtitle ? <p className="cover-sub">{subtitle}</p> : null}
        </div>
      </div>
    </div>
  );
}
