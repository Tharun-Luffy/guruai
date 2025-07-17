import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const layout = ({ children }) => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient">Industry Insights</h1>
      </div>
      <div>
        <Suspense
          fallback={<BarLoader className="mt-4" width={"100%"} color="grey" />}
        >
          {children}
        </Suspense>
      </div>
    </div>
  );
};

export default layout;
