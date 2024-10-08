import { Transition } from "@headlessui/react";
import { FadeAndSlide } from "../utils/animations";
import { useEffect, useState } from "react";

export default function clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let options = { timeZone: "Europe/London" };
      let londonTime = date.toLocaleTimeString("en-GB", options);
      setTime(londonTime);
    }, 1000);
  }, []);

  return (
    <FadeAndSlide delay="delay-[800ms]">
      <div
        className={`min-h-20 text-xl lg:text-2xl font-[150] p-4   col-span-4 lg:col-span-1 lg:col-start-2 lg:row-start-7 flex items-center justify-center custom-box-style`}
      >
        <Transition
          enter={`transition-all ease-in-out duration-700`}
          enterFrom="opacity-0"
          enterTo="opacity-100 translate-y-0"
          show={time !== ""}
        >
          <center>
            {time}
            <br />
            <div className="font-[200] text-base text-slate-400">UK Time</div>
          </center>
        </Transition>
      </div>
    </FadeAndSlide>
  );
}
