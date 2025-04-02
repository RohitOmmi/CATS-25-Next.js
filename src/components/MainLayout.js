import React from "react";
import Header from "./common/Header";

function MainLayout({ children }) {
  return (
    <div className="w-full h-screen">
      <div className="max-w-screen-xl mx-auto  h-full flex flex-col ">
        <Header />
        <div className="flex-1">
          
          {children}</div>
        {/* ✅ This ensures the content fills remaining height */}
      </div>
    </div>
  );
}

export default MainLayout;
