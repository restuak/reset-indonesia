"use client";

import ScrollUpAndHome from "@/components/scrollup";

export default function HeroGreenPic() {
  return (
    <div className="w-screen min-h-screen bg-[#0e0e10] relative pb-32">
      <div className="">
        <iframe
          src="https://pinkijo.vercel.app/"
          className="w-full min-h-[150vh] bg-[#0e0e10]"
          style={{ border: "none" }}
        />
      </div>

      <ScrollUpAndHome />
    </div>
  );
}
