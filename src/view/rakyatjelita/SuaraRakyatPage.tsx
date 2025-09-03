"use client";

import ScrollUpAndHome from "@/components/scrollup";

export default function HeroGreenPic() {
  return (
    <div className="w-screen min-h-screen bg-[#e585c4] relative pb-32">
      <div className="">
        <iframe
          src="https://resetindonesia.com/"
          className="w-full min-h-[150vh] bg-[#e585c4]"
          style={{ border: "none" }}
        />
      </div>

      <ScrollUpAndHome />
    </div>
  );
}
