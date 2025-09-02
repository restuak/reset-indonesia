"use client";

import ScrollUpAndHome from "@/components/scrollup";

export default function RakyatMenuntut() {

  return (
    <div className="w-screen min-h-screen bg-black relative pb-32">

      <div className="">
        <iframe
          src="https://rakyatmenuntut.net/"
          className="w-full min-h-[150vh] bg-black"
          style={{ border: "none" }}
        />
      </div>

      <ScrollUpAndHome />
    </div>
  );
}
