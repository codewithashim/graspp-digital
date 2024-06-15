"use client";
import { FC, ReactNode } from "react";

interface RootLayoutsProps {
  children: ReactNode;
}

const RootLayouts: FC<RootLayoutsProps> = ({ children }) => {
  return (
    <main className="bg-[#22272e]">
      <section className="container">{children}</section>
    </main>
  );
};

export default RootLayouts;
