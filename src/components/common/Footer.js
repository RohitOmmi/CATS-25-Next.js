"use client";
import * as React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#004740] w-full fixed bottom-0">
        <div className="max-w-screen-xl mx-auto">
          <div className="container py-3">
            <div className="flex flex-row items-center justify-between text-[16px] text-white">
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
