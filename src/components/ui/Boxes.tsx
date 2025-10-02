import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentBox({ children, className }: BoxProps) {
  return <div className={`content-box ${className ?? ""}`}>{children}</div>;
}

export function DefinitionBox({ children, className }: BoxProps) {
  return <div className={`definition-box ${className ?? ""}`}>{children}</div>;
}

export function ActivityBox({ children, className }: BoxProps) {
  return <div className={`activity-box ${className ?? ""}`}>{children}</div>;
}

export function PracticeSection({ children, className }: BoxProps) {
  return <div className={`practice-section ${className ?? ""}`}>{children}</div>;
}

export function NumberBox({ children, className }: BoxProps) {
  return <div className={`number-box ${className ?? ""}`}>{children}</div>;
}
