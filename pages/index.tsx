import React, { Suspense, lazy } from "react";
import RootLayouts from "@/src/layouts/RootLayout";
import dynamic from 'next/dynamic';

const Home = dynamic(() => import("@/src/components/Home/Home"), {
	ssr: false
});


const HomePage = () => {
  return (
    <RootLayouts>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </RootLayouts>
  );
};

export default HomePage;
