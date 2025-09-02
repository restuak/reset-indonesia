"use client";

import ScrollUpAndHome from "@/components/scrollup";

export default function BravePinkPic() {
  return (
    <div className="w-screen min-h-screen bg-[#f6f7f8] relative pb-32">
      <div className="">
        <iframe
          src="https://brave-pink-hero-green.lovable.app/"
          className="w-full min-h-[150vh] bg-[#f6f7f8]"
          style={{ border: "none" }}
        />
      </div>

      <ScrollUpAndHome />
    </div>
  );
}
