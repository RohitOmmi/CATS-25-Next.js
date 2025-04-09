"use client";
import * as React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#004740] w-full md:fixed  md:bottom-0">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className=" py-3">
            <div className="flex flex-col items-center justify-evenly md:flex-row md:items-center md:justify-between text-[16px] text-white space-y-2 md:space-y-0">
              <small className="mb-0 text-center text-white">
                © 2025 GITAM - All Rights Reserved{" "}
              </small>
              <small className="mb-0 text-center text-white">
                Powered by CATS, GITAM{" "}
              </small>
            </div>
          </div>
        </div>
      </div>                      
    </>
  );
}
